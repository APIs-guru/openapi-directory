from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionLogonPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    password: str = field(metadata={'path_param': { 'field_name': 'password', 'style': 'simple', 'explode': False }})
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionLogonRequest:
    path_params: ProtocolTelnetConnectionLogonPathParams = field()
    

@dataclass
class ProtocolTelnetConnectionLogonResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_telnet_connection_logon_200_application_json_strings: Optional[List[str]] = field(default=None)
    
