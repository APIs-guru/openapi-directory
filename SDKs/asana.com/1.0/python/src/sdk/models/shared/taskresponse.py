from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TaskResponseApprovalStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"


@dataclass_json
@dataclass
class TaskResponseAssignee:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class TaskResponseAssigneeSection:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class TaskResponseAssigneeStatusEnum(str, Enum):
    TODAY = "today"
    UPCOMING = "upcoming"
    LATER = "later"
    NEW = "new"
    INBOX = "inbox"


@dataclass_json
@dataclass
class TaskResponseExternal:
    r"""TaskResponseExternal
    *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
    The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    

@dataclass_json
@dataclass
class TaskResponseMemberships:
    project: Optional[ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    section: Optional[SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('section') }})
    

@dataclass_json
@dataclass
class TaskResponseParent:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    
class TaskResponseResourceSubtypeEnum(str, Enum):
    DEFAULT_TASK = "default_task"
    MILESTONE = "milestone"
    SECTION = "section"
    APPROVAL = "approval"


@dataclass_json
@dataclass
class TaskResponseWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    

@dataclass_json
@dataclass
class TaskResponse:
    approval_status: Optional[TaskResponseApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approval_status') }})
    assignee: Optional[TaskResponseAssignee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assignee_section: Optional[TaskResponseAssigneeSection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_section') }})
    assignee_status: Optional[TaskResponseAssigneeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee_status') }})
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    completed_by: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_by') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[List[CustomFieldResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    dependencies: Optional[List[AsanaResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependencies') }})
    dependents: Optional[List[AsanaResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependents') }})
    due_at: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_at'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[TaskResponseExternal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external') }})
    followers: Optional[List[UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    hearted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearted') }})
    hearts: Optional[List[Like]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearts') }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_rendered_as_separator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_rendered_as_separator') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    likes: Optional[List[Like]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    memberships: Optional[List[TaskResponseMemberships]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    num_hearts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hearts') }})
    num_likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_likes') }})
    num_subtasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_subtasks') }})
    parent: Optional[TaskResponseParent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    permalink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    projects: Optional[List[ProjectCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    resource_subtype: Optional[TaskResponseResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[TagCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    workspace: Optional[TaskResponseWorkspace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
