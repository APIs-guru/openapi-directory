from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTimerScriptsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTimerScriptsRequest:
    path_params: ListTimerScriptsPathParams = field()
    

@dataclass
class ListTimerScriptsResponse:
    content_type: str = field()
    status_code: int = field()
    timer_scripts: Optional[List[shared.TimerScript]] = field(default=None)
    
