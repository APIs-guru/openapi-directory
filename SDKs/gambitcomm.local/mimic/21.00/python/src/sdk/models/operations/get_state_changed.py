from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStateChangedPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStateChangedRequest:
    path_params: GetStateChangedPathParams = field(default=None)
    

@dataclass
class GetStateChangedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_state_changed_200_application_json_int32_integer: Optional[int] = field(default=None)
    
