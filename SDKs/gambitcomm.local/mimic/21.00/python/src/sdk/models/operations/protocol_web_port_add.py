from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortAddRequest:
    path_params: ProtocolWebPortAddPathParams = field(default=None)
    

@dataclass
class ProtocolWebPortAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_web_port_add_200_application_json_string: Optional[str] = field(default=None)
    
