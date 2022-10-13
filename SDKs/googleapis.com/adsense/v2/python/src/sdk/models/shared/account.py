from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timezone

class AccountStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class Account:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pending_tasks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingTasks' }})
    premium: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'premium' }})
    state: Optional[AccountStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    time_zone: Optional[timezone.TimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
