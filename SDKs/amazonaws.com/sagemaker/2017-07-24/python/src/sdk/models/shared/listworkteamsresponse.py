from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workteam


@dataclass_json
@dataclass
class ListWorkteamsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workteams: List[workteam.Workteam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workteams' }})
    
