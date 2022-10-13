from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentcommand


@dataclass_json
@dataclass
class CreateDeploymentRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppId' }})
    command: deploymentcommand.DeploymentCommand = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Command' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomJson' }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceIds' }})
    layer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerIds' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    
