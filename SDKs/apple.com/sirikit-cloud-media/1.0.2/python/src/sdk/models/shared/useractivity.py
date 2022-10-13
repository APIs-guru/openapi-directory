from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserActivity:
    activity_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    persistent_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'persistentIdentifier' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
