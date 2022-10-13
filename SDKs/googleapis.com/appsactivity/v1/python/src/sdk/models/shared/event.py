from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import move
from . import permissionchange
from . import rename
from . import target
from . import user

class EventAdditionalEventTypesEnum(str, Enum):
    COMMENT = "comment"
    CREATE = "create"
    EDIT = "edit"
    EMPTY_TRASH = "emptyTrash"
    MOVE = "move"
    PERMISSION_CHANGE = "permissionChange"
    RENAME = "rename"
    TRASH = "trash"
    UNKNOWN = "unknown"
    UNTRASH = "untrash"
    UPLOAD = "upload"

class EventPrimaryEventTypeEnum(str, Enum):
    COMMENT = "comment"
    CREATE = "create"
    EDIT = "edit"
    EMPTY_TRASH = "emptyTrash"
    MOVE = "move"
    PERMISSION_CHANGE = "permissionChange"
    RENAME = "rename"
    TRASH = "trash"
    UNKNOWN = "unknown"
    UNTRASH = "untrash"
    UPLOAD = "upload"


@dataclass_json
@dataclass
class Event:
    additional_event_types: Optional[List[EventAdditionalEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalEventTypes' }})
    event_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTimeMillis' }})
    from_user_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromUserDeletion' }})
    move: Optional[move.Move] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'move' }})
    permission_changes: Optional[List[permissionchange.PermissionChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionChanges' }})
    primary_event_type: Optional[EventPrimaryEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryEventType' }})
    rename: Optional[rename.Rename] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rename' }})
    target: Optional[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
