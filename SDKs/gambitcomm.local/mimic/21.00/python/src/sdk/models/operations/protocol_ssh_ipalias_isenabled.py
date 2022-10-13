from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSSHIpaliasIsenabledPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    ipaddress: str = field(default=None, metadata={'path_param': { 'field_name': 'ipaddress', 'style': 'simple', 'explode': False }})
    port: int = field(default=None, metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSSHIpaliasIsenabledRequest:
    path_params: ProtocolSSHIpaliasIsenabledPathParams = field(default=None)
    

@dataclass
class ProtocolSSHIpaliasIsenabledResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_ssh_ipalias_isenabled_200_application_json_string: Optional[str] = field(default=None)
    
