from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICoreDtoTagsTag:
    datapoints: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datapoints' }, 'form': { 'field_name': 'datapoints' }})
    groups: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }, 'form': { 'field_name': 'groups' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }, 'form': { 'field_name': 'name' }})
    
