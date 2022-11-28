from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InteractionLimit:
    r"""InteractionLimit
    Limit interactions to a specific type of user for a specified duration
    """
    
    limit: InteractionGroupEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    expiry: Optional[InteractionExpiryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry') }})
    
