from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionLogonPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = field(default=None, metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    password: str = field(default=None, metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionLogonRequest:
    path_params: ProtocolTelnetConnectionLogonPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetConnectionLogonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_connection_logon_200_application_json_strings: Optional[List[str]] = field(default=None)
    
