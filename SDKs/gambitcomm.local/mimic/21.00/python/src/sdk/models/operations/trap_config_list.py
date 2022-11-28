from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TrapConfigListPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class TrapConfigListRequest:
    path_params: TrapConfigListPathParams = field()
    

@dataclass
class TrapConfigListResponse:
    content_type: str = field()
    status_code: int = field()
    trap_dests: Optional[List[shared.TrapDest]] = field(default=None)
    
