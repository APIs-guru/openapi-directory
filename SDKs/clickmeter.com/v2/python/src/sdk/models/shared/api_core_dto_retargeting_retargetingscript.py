from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoRetargetingRetargetingScript:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }, 'form': { 'field_name': 'script' }})
    
