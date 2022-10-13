from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetStatePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    state: int = field(default=None, metadata={'path_param': { 'field_name': 'state', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetStateRequest:
    path_params: SetStatePathParams = field(default=None)
    

@dataclass
class SetStateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_state_200_application_json_string: Optional[str] = field(default=None)
    
