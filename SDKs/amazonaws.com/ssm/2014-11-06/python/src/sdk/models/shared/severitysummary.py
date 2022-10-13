from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SeveritySummary:
    critical_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CriticalCount' }})
    high_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HighCount' }})
    informational_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InformationalCount' }})
    low_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LowCount' }})
    medium_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediumCount' }})
    unspecified_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnspecifiedCount' }})
    
