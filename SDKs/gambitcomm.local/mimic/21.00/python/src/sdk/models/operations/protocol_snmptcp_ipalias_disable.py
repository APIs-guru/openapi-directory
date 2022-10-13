from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmptcpIpaliasDisablePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    ipaddress: str = field(default=None, metadata={'path_param': { 'field_name': 'ipaddress', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpIpaliasDisableRequest:
    path_params: ProtocolSnmptcpIpaliasDisablePathParams = field(default=None)
    

@dataclass
class ProtocolSnmptcpIpaliasDisableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmptcp_ipalias_disable_200_application_json_string: Optional[str] = field(default=None)
    
