from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProjectEntityGlobalAccessEnum(str, Enum):
    NONE = "none"
    ANYONE_WITH_READ = "anyone_with_read"
    ANYONE_WITH_FULL = "anyone_with_full"


@dataclass_json
@dataclass
class ProjectEntity:
    global_access: Optional[ProjectEntityGlobalAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'global_access' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
