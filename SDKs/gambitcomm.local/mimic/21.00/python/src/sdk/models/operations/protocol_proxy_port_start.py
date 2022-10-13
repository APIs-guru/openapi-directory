from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortStartPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortStartRequest:
    path_params: ProtocolProxyPortStartPathParams = field(default=None)
    

@dataclass
class ProtocolProxyPortStartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_proxy_port_start_200_application_json_string: Optional[str] = field(default=None)
    
