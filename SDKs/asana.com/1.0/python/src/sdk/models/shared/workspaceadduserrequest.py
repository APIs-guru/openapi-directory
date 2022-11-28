from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkspaceAddUserRequest:
    r"""WorkspaceAddUserRequest
    A user identification object for specification with the addUser/removeUser endpoints.
    """
    
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
