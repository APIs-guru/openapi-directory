from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDeploymentRequest:
    command: DeploymentCommand = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Command') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppId') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }})
    custom_json: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomJson') }})
    instance_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceIds') }})
    layer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerIds') }})
    
