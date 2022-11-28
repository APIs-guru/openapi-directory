from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TaskRequestApprovalStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"

class TaskRequestAssigneeStatusEnum(str, Enum):
    TODAY = "today"
    UPCOMING = "upcoming"
    LATER = "later"
    NEW = "new"
    INBOX = "inbox"


@dataclass_json
@dataclass
class TaskRequestExternal:
    r"""TaskRequestExternal
    *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
    The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    
class TaskRequestResourceSubtypeEnum(str, Enum):
    DEFAULT_TASK = "default_task"
    MILESTONE = "milestone"
    SECTION = "section"
    APPROVAL = "approval"


@dataclass_json
@dataclass
class TaskRequestInput:
    approval_status: Optional[TaskRequestApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_status') }})
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assignee_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_section') }})
    assignee_status: Optional[TaskRequestAssigneeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_status') }})
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    completed_by: Optional[UserCompactInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_by') }})
    custom_fields: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    due_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[TaskRequestExternal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    followers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    projects: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    resource_subtype: Optional[TaskRequestResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    start_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    workspace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
