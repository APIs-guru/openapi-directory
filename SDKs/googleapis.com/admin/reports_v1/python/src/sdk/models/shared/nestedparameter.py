from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NestedParameter:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    int_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intValue' }})
    multi_bool_value: Optional[List[bool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiBoolValue' }})
    multi_int_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiIntValue' }})
    multi_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiValue' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
