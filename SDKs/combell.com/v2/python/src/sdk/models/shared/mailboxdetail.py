from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoforward
from . import autoreply


@dataclass_json
@dataclass
class MailboxDetail:
    actual_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_size' }})
    auto_forward: Optional[autoforward.AutoForward] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_forward' }})
    auto_reply: Optional[autoreply.AutoReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_reply' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    max_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_size' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
