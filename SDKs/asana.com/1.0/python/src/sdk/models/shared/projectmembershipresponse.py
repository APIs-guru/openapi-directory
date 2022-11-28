from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProjectMembershipResponseWriteAccessEnum(str, Enum):
    FULL_WRITE = "full_write"
    COMMENT_ONLY = "comment_only"


@dataclass_json
@dataclass
class ProjectMembershipResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    project: Optional[ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    user: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    write_access: Optional[ProjectMembershipResponseWriteAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('write_access') }})
    
