from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetInformTimeoutPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    inform_timeout: int = field(metadata={'path_param': { 'field_name': 'inform_timeout', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetInformTimeoutRequest:
    path_params: SetInformTimeoutPathParams = field()
    

@dataclass
class SetInformTimeoutResponse:
    content_type: str = field()
    status_code: int = field()
    set_inform_timeout_200_application_json_int32_integer: Optional[int] = field(default=None)
    
