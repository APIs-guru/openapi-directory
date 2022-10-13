from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    target: str = field(default=None, metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    target_port: int = field(default=None, metadata={'path_param': { 'field_name': 'targetPort', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortAddRequest:
    path_params: ProtocolProxyPortAddPathParams = field(default=None)
    

@dataclass
class ProtocolProxyPortAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_proxy_port_add_200_application_json_string: Optional[str] = field(default=None)
    
