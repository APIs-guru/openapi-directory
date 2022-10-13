from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolWebPortStartPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolWebPortStartRequest:
    path_params: ProtocolWebPortStartPathParams = field(default=None)
    

@dataclass
class ProtocolWebPortStartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_web_port_start_200_application_json_string: Optional[str] = field(default=None)
    
