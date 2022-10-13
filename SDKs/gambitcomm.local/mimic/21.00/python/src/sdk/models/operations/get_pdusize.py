from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPdusizePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPdusizeRequest:
    path_params: GetPdusizePathParams = field(default=None)
    

@dataclass
class GetPdusizeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_pdusize_200_application_json_int32_integer: Optional[int] = field(default=None)
    
