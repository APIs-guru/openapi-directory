from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserAuthMethod:
    r"""UserAuthMethod
    Authentication method
    """
    
    auth_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authId') }})
    is_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    options: Optional[List[KeyValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
