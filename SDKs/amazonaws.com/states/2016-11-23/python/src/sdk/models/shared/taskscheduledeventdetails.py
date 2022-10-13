from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskScheduledEventDetails:
    heartbeat_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heartbeatInSeconds' }})
    parameters: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    resource: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInSeconds' }})
    
