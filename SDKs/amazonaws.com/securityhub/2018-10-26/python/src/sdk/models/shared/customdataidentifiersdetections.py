from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import occurrences


@dataclass_json
@dataclass
class CustomDataIdentifiersDetections:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    occurrences: Optional[occurrences.Occurrences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Occurrences' }})
    
