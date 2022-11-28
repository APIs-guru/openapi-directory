from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPdusizePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPdusizeRequest:
    path_params: GetPdusizePathParams = field()
    

@dataclass
class GetPdusizeResponse:
    content_type: str = field()
    status_code: int = field()
    get_pdusize_200_application_json_int32_integer: Optional[int] = field(default=None)
    
