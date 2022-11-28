from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetPortPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetPortRequest:
    path_params: SetPortPathParams = field()
    

@dataclass
class SetPortResponse:
    content_type: str = field()
    status_code: int = field()
    set_port_200_application_json_string: Optional[str] = field(default=None)
    
