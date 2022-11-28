from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDelayPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDelayRequest:
    path_params: GetDelayPathParams = field()
    

@dataclass
class GetDelayResponse:
    content_type: str = field()
    status_code: int = field()
    get_delay_200_application_json_int32_integer: Optional[int] = field(default=None)
    
