from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectcompact
from . import usercompact

class ProjectMembershipResponseWriteAccessEnum(str, Enum):
    FULL_WRITE = "full_write"
    COMMENT_ONLY = "comment_only"


@dataclass_json
@dataclass
class ProjectMembershipResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    project: Optional[projectcompact.ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    write_access: Optional[ProjectMembershipResponseWriteAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write_access' }})
    
