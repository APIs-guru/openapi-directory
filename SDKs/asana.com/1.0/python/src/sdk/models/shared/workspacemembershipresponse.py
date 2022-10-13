from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import usertasklistresponse
from . import workspacecompact


@dataclass_json
@dataclass
class WorkspaceMembershipResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    is_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_admin' }})
    is_guest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_guest' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_task_list: Optional[usertasklistresponse.UserTaskListResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_task_list' }})
    workspace: Optional[workspacecompact.WorkspaceCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
