from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Like:
    r"""Like
    An object to represent a user's like.
    """
    
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    user: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
