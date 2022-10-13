from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Rule:
    dollar_collection: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$collection' }})
    dollar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': '$id' }})
    array: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'array' }})
    default: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    list: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list' }})
    required: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
