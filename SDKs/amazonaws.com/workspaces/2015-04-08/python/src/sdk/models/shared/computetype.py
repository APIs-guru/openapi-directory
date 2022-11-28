from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeType:
    r"""ComputeType
    Describes the compute type of the bundle.
    """
    
    name: Optional[ComputeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
