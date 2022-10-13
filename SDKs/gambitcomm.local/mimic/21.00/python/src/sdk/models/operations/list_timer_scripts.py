from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTimerScriptsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTimerScriptsRequest:
    path_params: ListTimerScriptsPathParams = field(default=None)
    

@dataclass
class ListTimerScriptsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    timer_scripts: Optional[List[shared.TimerScript]] = field(default=None)
    
