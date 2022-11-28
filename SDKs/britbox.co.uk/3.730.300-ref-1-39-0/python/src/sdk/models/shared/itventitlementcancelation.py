from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvEntitlementCancelation:
    cancelled_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelled_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    itv_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itvId') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    subscription_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    
