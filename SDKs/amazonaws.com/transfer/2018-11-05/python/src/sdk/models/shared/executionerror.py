from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionError:
    r"""ExecutionError
    Specifies the error message and type, for an error that occurs during the execution of the workflow.
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    type: ExecutionErrorTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
