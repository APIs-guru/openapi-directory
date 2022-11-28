from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StartPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartRequest:
    path_params: StartPathParams = field()
    

@dataclass
class StartResponse:
    content_type: str = field()
    status_code: int = field()
    start_200_application_json_string: Optional[str] = field(default=None)
    
