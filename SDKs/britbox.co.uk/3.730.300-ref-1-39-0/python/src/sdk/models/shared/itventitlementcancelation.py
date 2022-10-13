from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvEntitlementCancelation:
    cancelled_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelled_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    itv_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itvId' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    subscription_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    
