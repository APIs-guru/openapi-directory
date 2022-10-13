from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetHostPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    host: str = field(default=None, metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetHostRequest:
    path_params: SetHostPathParams = field(default=None)
    

@dataclass
class SetHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_host_200_application_json_string: Optional[str] = field(default=None)
    
