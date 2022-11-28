from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StartIpaliasPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartIpaliasRequest:
    path_params: StartIpaliasPathParams = field()
    

@dataclass
class StartIpaliasResponse:
    content_type: str = field()
    status_code: int = field()
    start_ipalias_200_application_json_string: Optional[str] = field(default=None)
    
