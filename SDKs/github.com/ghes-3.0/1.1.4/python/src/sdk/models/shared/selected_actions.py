from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SelectedActions:
    github_owned_allowed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github_owned_allowed' }})
    patterns_allowed: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patterns_allowed' }})
    
