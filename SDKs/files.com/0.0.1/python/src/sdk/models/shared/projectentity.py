from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProjectEntityGlobalAccessEnum(str, Enum):
    NONE = "none"
    ANYONE_WITH_READ = "anyone_with_read"
    ANYONE_WITH_FULL = "anyone_with_full"


@dataclass_json
@dataclass
class ProjectEntity:
    r"""ProjectEntity
    List Projects
    """
    
    global_access: Optional[ProjectEntityGlobalAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global_access') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
