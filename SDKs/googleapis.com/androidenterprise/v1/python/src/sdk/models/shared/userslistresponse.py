from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsersListResponse:
    user: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
