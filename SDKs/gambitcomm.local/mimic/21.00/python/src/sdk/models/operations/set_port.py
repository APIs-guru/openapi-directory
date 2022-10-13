from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetPortPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetPortRequest:
    path_params: SetPortPathParams = field(default=None)
    

@dataclass
class SetPortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_port_200_application_json_string: Optional[str] = field(default=None)
    
