from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChangedStateListResponse:
    agent_states: Optional[List[shared.AgentState]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
