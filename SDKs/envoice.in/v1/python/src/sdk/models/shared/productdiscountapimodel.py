from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductDiscountAPIModel:
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountPercentage' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    valid_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    valid_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
