from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VehHistory:
    dealer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealerName' }})
    first_seen: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    miles: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles' }})
    new: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    zip: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
