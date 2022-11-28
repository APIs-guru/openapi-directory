from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LoginResponse:
    r"""LoginResponse
    Payload of successful login
    """
    
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    login_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
