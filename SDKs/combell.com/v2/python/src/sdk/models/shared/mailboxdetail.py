from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MailboxDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_size') }})
    auto_forward: Optional[AutoForward] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_forward') }})
    auto_reply: Optional[AutoReply] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_reply') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_size') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
