from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import member


@dataclass_json
@dataclass
class ListGroupMembersResponse:
    members: Optional[List[member.Member]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Members' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
