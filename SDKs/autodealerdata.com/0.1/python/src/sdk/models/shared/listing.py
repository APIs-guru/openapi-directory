from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Listing:
    ask_price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'askPrice' }})
    brand_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandName' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    dealer_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealerID' }})
    first_seen: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    interior_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interiorColor' }})
    is_new: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNew' }})
    last_seen: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mileage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mileage' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelName' }})
    msrp: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msrp' }})
    vin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    vin_decode: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vinDecode' }})
    year: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
