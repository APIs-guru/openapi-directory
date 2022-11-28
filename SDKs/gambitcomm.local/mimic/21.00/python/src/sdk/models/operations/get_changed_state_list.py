from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChangedStateListResponse:
    content_type: str = field()
    status_code: int = field()
    agent_states: Optional[List[shared.AgentState]] = field(default=None)
    
