from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancescount


@dataclass_json
@dataclass
class StackSummary:
    apps_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppsCount' }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    instances_count: Optional[instancescount.InstancesCount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancesCount' }})
    layers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayersCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
