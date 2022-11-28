from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Event
    Represents the changes associated with an action taken by a user.
    """
    
    additional_event_types: Optional[List[EventAdditionalEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalEventTypes') }})
    event_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTimeMillis') }})
    from_user_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromUserDeletion') }})
    move: Optional[Move] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move') }})
    permission_changes: Optional[List[PermissionChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionChanges') }})
    primary_event_type: Optional[EventPrimaryEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEventType') }})
    rename: Optional[Rename] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    target: Optional[Target] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
