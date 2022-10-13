from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Mds:
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    mds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mds' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    sold_vins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sold_vins' }})
    total_active_cars_for_ymmt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_active_cars_for_ymmt' }})
    total_cars_sold_in_last_45_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_cars_sold_in_last_45_days' }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
