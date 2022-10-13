from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDropsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDropsRequest:
    path_params: GetDropsPathParams = field(default=None)
    

@dataclass
class GetDropsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_drops_200_application_json_int32_integer: Optional[int] = field(default=None)
    
