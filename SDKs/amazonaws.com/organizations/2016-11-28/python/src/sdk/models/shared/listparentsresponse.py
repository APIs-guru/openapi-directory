from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parent


@dataclass_json
@dataclass
class ListParentsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    parents: Optional[List[parent.Parent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parents' }})
    
