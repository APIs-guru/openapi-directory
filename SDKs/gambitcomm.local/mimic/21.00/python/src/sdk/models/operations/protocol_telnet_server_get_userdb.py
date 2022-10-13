from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetServerGetUserdbPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetServerGetUserdbRequest:
    path_params: ProtocolTelnetServerGetUserdbPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetServerGetUserdbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_server_get_userdb_200_application_json_strings: Optional[List[str]] = field(default=None)
    
