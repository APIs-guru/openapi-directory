from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskStartedEventDetails:
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    
