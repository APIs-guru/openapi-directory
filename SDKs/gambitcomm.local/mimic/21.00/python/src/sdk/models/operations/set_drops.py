from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetDropsPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    drops: int = field(metadata={'path_param': { 'field_name': 'drops', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetDropsRequest:
    path_params: SetDropsPathParams = field()
    

@dataclass
class SetDropsResponse:
    content_type: str = field()
    status_code: int = field()
    set_drops_200_application_json_int32_integer: Optional[int] = field(default=None)
    
