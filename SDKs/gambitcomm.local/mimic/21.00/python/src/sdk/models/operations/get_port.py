from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPortPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortRequest:
    path_params: GetPortPathParams = field(default=None)
    

@dataclass
class GetPortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_port_200_application_json_string: Optional[str] = field(default=None)
    
