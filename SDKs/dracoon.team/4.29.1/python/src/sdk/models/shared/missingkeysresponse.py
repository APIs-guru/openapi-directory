from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MissingKeysResponseOutput:
    r"""MissingKeysResponseOutput
    Missing keys information
    """
    
    files: Optional[List[FileFileKeys]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    items: Optional[List[UserIDFileIDItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    users: Optional[List[UserUserPublicKeyOutput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
