from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopRequest:
    path_params: StopPathParams = field(default=None)
    

@dataclass
class StopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_200_application_json_string: Optional[str] = field(default=None)
    
