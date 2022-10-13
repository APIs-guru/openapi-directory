from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceQuota:
    available_machine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableMachineCount' }})
    gcp_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpService' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
