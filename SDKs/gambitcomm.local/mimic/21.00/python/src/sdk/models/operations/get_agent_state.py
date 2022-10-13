from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAgentStatePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentStateRequest:
    path_params: GetAgentStatePathParams = field(default=None)
    

@dataclass
class GetAgentStateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_agent_state_200_application_json_int32_integer: Optional[int] = field(default=None)
    
