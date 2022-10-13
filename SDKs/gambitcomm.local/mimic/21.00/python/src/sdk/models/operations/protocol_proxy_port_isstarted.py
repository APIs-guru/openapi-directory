from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxyPortIsstartedPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortIsstartedRequest:
    path_params: ProtocolProxyPortIsstartedPathParams = field(default=None)
    

@dataclass
class ProtocolProxyPortIsstartedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_proxy_port_isstarted_200_application_json_string: Optional[str] = field(default=None)
    
