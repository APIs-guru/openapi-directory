from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComputeFarmConfiguration:
    active_directory_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDirectoryUser' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    
