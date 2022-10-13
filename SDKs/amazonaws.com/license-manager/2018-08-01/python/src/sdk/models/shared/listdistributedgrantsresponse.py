from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grant


@dataclass_json
@dataclass
class ListDistributedGrantsResponse:
    grants: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grants' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
