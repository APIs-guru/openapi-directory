from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortAddPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    target: str = field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    target_port: int = field(metadata={'path_param': { 'field_name': 'targetPort', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortAddRequest:
    path_params: ProtocolProxyPortAddPathParams = field()
    

@dataclass
class ProtocolProxyPortAddResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_proxy_port_add_200_application_json_string: Optional[str] = field(default=None)
    
