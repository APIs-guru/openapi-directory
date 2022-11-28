from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigurationStatus:
    r"""ConfigurationStatus
    Contains current status information for the configuration.
    """
    
    state: ConfigurationStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    error: Optional[ConfigurationErrorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
