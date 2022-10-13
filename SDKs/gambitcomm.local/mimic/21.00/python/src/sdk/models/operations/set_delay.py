from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetDelayPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    delay: int = field(default=None, metadata={'path_param': { 'field_name': 'delay', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetDelayRequest:
    path_params: SetDelayPathParams = field(default=None)
    

@dataclass
class SetDelayResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_delay_200_application_json_int32_integer: Optional[int] = field(default=None)
    
