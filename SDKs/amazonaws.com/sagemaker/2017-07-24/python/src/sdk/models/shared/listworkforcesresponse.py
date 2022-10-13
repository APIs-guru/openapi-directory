from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workforce


@dataclass_json
@dataclass
class ListWorkforcesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workforces: List[workforce.Workforce] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workforces' }})
    
