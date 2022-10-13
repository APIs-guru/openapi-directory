from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StartPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartRequest:
    path_params: StartPathParams = field(default=None)
    

@dataclass
class StartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    start_200_application_json_string: Optional[str] = field(default=None)
    
