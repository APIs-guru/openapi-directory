from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortRemovePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortRemoveRequest:
    path_params: ProtocolProxyPortRemovePathParams = field()
    

@dataclass
class ProtocolProxyPortRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_proxy_port_remove_200_application_json_string: Optional[str] = field(default=None)
    
