from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateParameterGroupRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    family: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Family' }})
    parameter_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
