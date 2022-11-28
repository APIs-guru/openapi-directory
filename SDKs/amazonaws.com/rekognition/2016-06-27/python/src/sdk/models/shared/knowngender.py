from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KnownGender:
    r"""KnownGender
    The known gender identity for the celebrity that matches the provided ID.
    """
    
    type: Optional[KnownGenderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
