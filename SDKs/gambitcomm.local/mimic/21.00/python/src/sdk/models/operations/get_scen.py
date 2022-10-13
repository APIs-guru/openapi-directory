from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetScenPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScenRequest:
    path_params: GetScenPathParams = field(default=None)
    

@dataclass
class GetScenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_scen_200_application_json_int32_integer: Optional[int] = field(default=None)
    
