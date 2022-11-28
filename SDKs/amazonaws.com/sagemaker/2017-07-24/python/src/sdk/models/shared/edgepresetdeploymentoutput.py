from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EdgePresetDeploymentOutput:
    r"""EdgePresetDeploymentOutput
    The output of a SageMaker Edge Manager deployable resource.
    """
    
    type: EdgePresetDeploymentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Artifact') }})
    status: Optional[EdgePresetDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    
