from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import salesstats
from . import salesstats
from . import salesstats


@dataclass_json
@dataclass
class BasePopular:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    counts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    dom_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom_stats' }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryType' }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    miles_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles_stats' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    price_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_stats' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
