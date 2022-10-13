from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SummarizedCounter:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Average' }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Max' }})
    n: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'N' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sum' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    
