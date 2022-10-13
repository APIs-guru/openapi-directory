from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import customfieldresponse
from . import asanaresource
from . import asanaresource
from . import usercompact
from . import like
from . import like
from . import projectcompact
from . import sectioncompact
from . import projectcompact
from . import tagcompact

class TaskResponseApprovalStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    CHANGES_REQUESTED = "changes_requested"


@dataclass_json
@dataclass
class TaskResponseAssignee:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class TaskResponseAssigneeSection:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
class TaskResponseAssigneeStatusEnum(str, Enum):
    TODAY = "today"
    UPCOMING = "upcoming"
    LATER = "later"
    NEW = "new"
    INBOX = "inbox"


@dataclass_json
@dataclass
class TaskResponseExternal:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    

@dataclass_json
@dataclass
class TaskResponseMemberships:
    project: Optional[projectcompact.ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    section: Optional[sectioncompact.SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'section' }})
    

@dataclass_json
@dataclass
class TaskResponseParent:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    
class TaskResponseResourceSubtypeEnum(str, Enum):
    DEFAULT_TASK = "default_task"
    MILESTONE = "milestone"
    SECTION = "section"
    APPROVAL = "approval"


@dataclass_json
@dataclass
class TaskResponseWorkspace:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    

@dataclass_json
@dataclass
class TaskResponse:
    approval_status: Optional[TaskResponseApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approval_status' }})
    assignee: Optional[TaskResponseAssignee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignee_section: Optional[TaskResponseAssigneeSection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee_section' }})
    assignee_status: Optional[TaskResponseAssigneeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee_status' }})
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed' }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    completed_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_by' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_fields: Optional[List[customfieldresponse.CustomFieldResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_fields' }})
    dependencies: Optional[List[asanaresource.AsanaResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencies' }})
    dependents: Optional[List[asanaresource.AsanaResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependents' }})
    due_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external: Optional[TaskResponseExternal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external' }})
    followers: Optional[List[usercompact.UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    hearted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearted' }})
    hearts: Optional[List[like.Like]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearts' }})
    html_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_notes' }})
    is_rendered_as_separator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_rendered_as_separator' }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liked' }})
    likes: Optional[List[like.Like]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    memberships: Optional[List[TaskResponseMemberships]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    num_hearts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_hearts' }})
    num_likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_likes' }})
    num_subtasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_subtasks' }})
    parent: Optional[TaskResponseParent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permalink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permalink_url' }})
    projects: Optional[List[projectcompact.ProjectCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projects' }})
    resource_subtype: Optional[TaskResponseResourceSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    start_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tags: Optional[List[tagcompact.TagCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    workspace: Optional[TaskResponseWorkspace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
