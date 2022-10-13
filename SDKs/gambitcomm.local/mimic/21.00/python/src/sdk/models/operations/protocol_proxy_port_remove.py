from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortRemovePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortRemoveRequest:
    path_params: ProtocolProxyPortRemovePathParams = field(default=None)
    

@dataclass
class ProtocolProxyPortRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_proxy_port_remove_200_application_json_string: Optional[str] = field(default=None)
    
