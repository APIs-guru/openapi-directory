from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvEntitlement:
    card_type: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_type', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiry: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    plan: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    subscription_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    
