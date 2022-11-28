from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModificationState:
    r"""ModificationState
    Describes a WorkSpace modification.
    """
    
    resource: Optional[ModificationResourceEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    state: Optional[ModificationStateEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
