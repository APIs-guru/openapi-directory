from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputStartingPositionConfiguration:
    r"""InputStartingPositionConfiguration
    Describes the point at which the application reads from the streaming source.
    """
    
    input_starting_position: Optional[InputStartingPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPosition') }})
    
