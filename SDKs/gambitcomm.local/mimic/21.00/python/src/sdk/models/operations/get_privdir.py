from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPrivdirPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPrivdirRequest:
    path_params: GetPrivdirPathParams = field(default=None)
    

@dataclass
class GetPrivdirResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_privdir_200_application_json_string: Optional[str] = field(default=None)
    
