from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHostPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHostRequest:
    path_params: GetHostPathParams = field(default=None)
    

@dataclass
class GetHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_host_200_application_json_string: Optional[str] = field(default=None)
    
