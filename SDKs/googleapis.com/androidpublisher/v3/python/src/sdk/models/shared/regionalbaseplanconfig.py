from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class RegionalBasePlanConfig:
    new_subscriber_availability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSubscriberAvailability' }})
    price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
