from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInformTimeoutPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInformTimeoutRequest:
    path_params: GetInformTimeoutPathParams = field(default=None)
    

@dataclass
class GetInformTimeoutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_inform_timeout_200_application_json_int32_integer: Optional[int] = field(default=None)
    
