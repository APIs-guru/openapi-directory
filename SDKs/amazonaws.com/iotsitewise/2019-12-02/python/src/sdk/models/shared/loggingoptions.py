from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LoggingOptions:
    r"""LoggingOptions
    Contains logging options.
    """
    
    level: LoggingLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    
