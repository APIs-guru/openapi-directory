from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPrivdirPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPrivdirRequest:
    path_params: GetPrivdirPathParams = field()
    

@dataclass
class GetPrivdirResponse:
    content_type: str = field()
    status_code: int = field()
    get_privdir_200_application_json_string: Optional[str] = field(default=None)
    
