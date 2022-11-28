from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAgentStatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentStateRequest:
    path_params: GetAgentStatePathParams = field()
    

@dataclass
class GetAgentStateResponse:
    content_type: str = field()
    status_code: int = field()
    get_agent_state_200_application_json_int32_integer: Optional[int] = field(default=None)
    
