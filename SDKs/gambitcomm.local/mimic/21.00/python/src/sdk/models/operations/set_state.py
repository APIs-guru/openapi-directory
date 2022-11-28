from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetStatePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    state: int = field(metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetStateRequest:
    path_params: SetStatePathParams = field()
    

@dataclass
class SetStateResponse:
    content_type: str = field()
    status_code: int = field()
    set_state_200_application_json_string: Optional[str] = field(default=None)
    
