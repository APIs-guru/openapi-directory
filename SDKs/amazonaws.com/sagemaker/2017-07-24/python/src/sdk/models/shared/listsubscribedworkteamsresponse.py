from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscribedworkteam


@dataclass_json
@dataclass
class ListSubscribedWorkteamsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    subscribed_workteams: List[subscribedworkteam.SubscribedWorkteam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubscribedWorkteams' }})
    
