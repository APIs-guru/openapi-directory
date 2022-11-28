from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HaltPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class HaltRequest:
    path_params: HaltPathParams = field()
    

@dataclass
class HaltResponse:
    content_type: str = field()
    status_code: int = field()
    halt_200_application_json_string: Optional[str] = field(default=None)
    
