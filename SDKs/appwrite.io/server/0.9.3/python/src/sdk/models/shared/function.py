from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Function:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    dollar_permissions: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$permissions' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    date_updated: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateUpdated' }})
    events: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    runtime: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtime' }})
    schedule: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    schedule_next: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleNext' }})
    schedule_previous: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedulePrevious' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    vars: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vars' }})
    
