from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import root


@dataclass_json
@dataclass
class ListRootsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    roots: Optional[List[root.Root]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Roots' }})
    
