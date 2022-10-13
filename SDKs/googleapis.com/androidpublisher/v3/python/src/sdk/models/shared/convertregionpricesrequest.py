from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class ConvertRegionPricesRequest:
    price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
