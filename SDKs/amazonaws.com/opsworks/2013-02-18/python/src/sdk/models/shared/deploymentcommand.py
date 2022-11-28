from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentCommand:
    r"""DeploymentCommand
    Used to specify a stack or deployment command.
    """
    
    name: DeploymentCommandNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    args: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Args') }})
    
