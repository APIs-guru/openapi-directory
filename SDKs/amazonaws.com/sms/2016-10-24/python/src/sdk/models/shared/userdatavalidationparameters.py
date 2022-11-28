from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserDataValidationParameters:
    r"""UserDataValidationParameters
    Contains validation parameters.
    """
    
    script_type: Optional[ScriptTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptType') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
