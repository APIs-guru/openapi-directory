from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStateRequest:
    path_params: GetStatePathParams = field()
    

@dataclass
class GetStateResponse:
    content_type: str = field()
    status_code: int = field()
    get_state_200_application_json_string: Optional[str] = field(default=None)
    
