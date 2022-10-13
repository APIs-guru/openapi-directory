from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import table


@dataclass_json
@dataclass
class Workspace:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tables: Optional[List[table.Table]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
