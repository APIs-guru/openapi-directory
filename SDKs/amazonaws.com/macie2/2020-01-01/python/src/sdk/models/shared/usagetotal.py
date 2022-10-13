from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import currency_enum
from . import usagetype_enum


@dataclass_json
@dataclass
class UsageTotal:
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    estimated_cost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedCost' }})
    type: Optional[usagetype_enum.UsageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
