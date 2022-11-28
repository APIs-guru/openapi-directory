from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGroupRequest:
    r"""CreateGroupRequest
    Request model for creating a group
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    expiration: Optional[ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    
