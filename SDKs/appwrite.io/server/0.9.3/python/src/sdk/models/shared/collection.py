from dataclasses import dataclass, field
from typing import Any,List
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class Collection:
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    dollar_permissions: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$permissions' }})
    date_created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated' }})
    date_updated: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateUpdated' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rules: List[rule.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
