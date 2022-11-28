from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetHostPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    host: str = field(metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetHostRequest:
    path_params: SetHostPathParams = field()
    

@dataclass
class SetHostResponse:
    content_type: str = field()
    status_code: int = field()
    set_host_200_application_json_string: Optional[str] = field(default=None)
    
