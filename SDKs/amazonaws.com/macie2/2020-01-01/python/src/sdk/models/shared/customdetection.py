from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import occurrences


@dataclass_json
@dataclass
class CustomDetection:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    occurrences: Optional[occurrences.Occurrences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurrences' }})
    
