from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StopIpaliasPathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopIpaliasRequest:
    path_params: StopIpaliasPathParams = field(default=None)
    

@dataclass
class StopIpaliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    stop_ipalias_200_application_json_string: Optional[str] = field(default=None)
    
