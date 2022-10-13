from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import child


@dataclass_json
@dataclass
class ListChildrenResponse:
    children: Optional[List[child.Child]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Children' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
