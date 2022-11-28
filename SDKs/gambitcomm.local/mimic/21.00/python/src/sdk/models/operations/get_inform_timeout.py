from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInformTimeoutPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInformTimeoutRequest:
    path_params: GetInformTimeoutPathParams = field()
    

@dataclass
class GetInformTimeoutResponse:
    content_type: str = field()
    status_code: int = field()
    get_inform_timeout_200_application_json_int32_integer: Optional[int] = field(default=None)
    
