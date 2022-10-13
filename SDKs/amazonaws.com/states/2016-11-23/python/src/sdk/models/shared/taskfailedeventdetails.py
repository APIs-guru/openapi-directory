from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskFailedEventDetails:
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cause' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
