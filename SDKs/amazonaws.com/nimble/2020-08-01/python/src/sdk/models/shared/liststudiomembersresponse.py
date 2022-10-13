from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studiomembership


@dataclass_json
@dataclass
class ListStudioMembersResponse:
    members: Optional[List[studiomembership.StudioMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
