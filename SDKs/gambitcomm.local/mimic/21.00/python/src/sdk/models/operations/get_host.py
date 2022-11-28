from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHostPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHostRequest:
    path_params: GetHostPathParams = field()
    

@dataclass
class GetHostResponse:
    content_type: str = field()
    status_code: int = field()
    get_host_200_application_json_string: Optional[str] = field(default=None)
    
