from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutLifecyclePolicyInput:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerName' }})
    lifecycle_policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifecyclePolicy' }})
    
