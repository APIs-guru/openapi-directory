from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopRequest:
    path_params: StopPathParams = field()
    

@dataclass
class StopResponse:
    content_type: str = field()
    status_code: int = field()
    stop_200_application_json_string: Optional[str] = field(default=None)
    
