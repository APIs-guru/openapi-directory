from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvEntitlement:
    expiry: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    plan: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    source: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    subscription_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    card_type: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_type'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
