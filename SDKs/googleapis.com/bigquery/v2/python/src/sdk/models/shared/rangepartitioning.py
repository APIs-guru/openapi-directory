from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RangePartitioningRange:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

@dataclass_json
@dataclass
class RangePartitioning:
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    range: Optional[RangePartitioningRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
