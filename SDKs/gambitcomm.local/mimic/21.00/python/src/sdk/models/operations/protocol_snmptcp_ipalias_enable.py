from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmptcpIpaliasEnablePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    ipaddress: str = field(metadata={'path_param': { 'field_name': 'ipaddress', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpIpaliasEnableRequest:
    path_params: ProtocolSnmptcpIpaliasEnablePathParams = field()
    

@dataclass
class ProtocolSnmptcpIpaliasEnableResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmptcp_ipalias_enable_200_application_json_string: Optional[str] = field(default=None)
    
