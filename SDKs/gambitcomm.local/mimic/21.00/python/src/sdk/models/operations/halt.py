from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HaltPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class HaltRequest:
    path_params: HaltPathParams = field(default=None)
    

@dataclass
class HaltResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    halt_200_application_json_string: Optional[str] = field(default=None)
    
