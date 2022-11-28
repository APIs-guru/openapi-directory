from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploySystemInstanceResponse:
    summary: SystemInstanceSummary = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    greengrass_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('greengrassDeploymentId') }})
    
