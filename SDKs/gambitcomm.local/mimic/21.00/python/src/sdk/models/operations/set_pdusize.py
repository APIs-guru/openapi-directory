from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetPdusizePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    pdusize: int = field(metadata={'path_param': { 'field_name': 'pdusize', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetPdusizeRequest:
    path_params: SetPdusizePathParams = field()
    

@dataclass
class SetPdusizeResponse:
    content_type: str = field()
    status_code: int = field()
    set_pdusize_200_application_json_int32_integer: Optional[int] = field(default=None)
    
