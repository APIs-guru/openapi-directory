from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceState:
    r"""InstanceState
    The description of the current state of an instance.
    """
    
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[InstanceStateNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
