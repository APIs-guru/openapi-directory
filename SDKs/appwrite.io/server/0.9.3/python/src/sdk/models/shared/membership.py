from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Membership:
    r"""Membership
    Membership
    """
    
    dollar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('$id') }})
    confirm: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirm') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    invited: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invited') }})
    joined: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('joined') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    team_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
