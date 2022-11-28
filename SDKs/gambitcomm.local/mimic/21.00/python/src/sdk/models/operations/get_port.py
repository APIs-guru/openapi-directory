from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPortPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortRequest:
    path_params: GetPortPathParams = field()
    

@dataclass
class GetPortResponse:
    content_type: str = field()
    status_code: int = field()
    get_port_200_application_json_string: Optional[str] = field(default=None)
    
