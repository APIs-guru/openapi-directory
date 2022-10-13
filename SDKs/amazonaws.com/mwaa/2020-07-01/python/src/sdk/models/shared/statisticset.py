from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatisticSet:
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Maximum' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Minimum' }})
    sample_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleCount' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sum' }})
    
