from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Triplet:
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    mib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mib' }})
    scenario: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scenario' }})
    
