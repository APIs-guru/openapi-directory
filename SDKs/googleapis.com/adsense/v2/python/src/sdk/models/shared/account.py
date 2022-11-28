from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class Account:
    r"""Account
    Representation of an account.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_tasks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingTasks') }})
    premium: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium') }})
    state: Optional[AccountStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    time_zone: Optional[TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
