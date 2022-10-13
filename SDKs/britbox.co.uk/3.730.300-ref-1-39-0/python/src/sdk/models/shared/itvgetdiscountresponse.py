from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvGetDiscountResponse:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    headline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headline' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    initial_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialCost' }})
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longDescription' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    offerdurationperiod: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerdurationperiod' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    
