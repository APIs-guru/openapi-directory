from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionRequestPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    command: str = field(default=None, metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    connection_id: int = field(default=None, metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionRequestRequest:
    path_params: ProtocolTelnetConnectionRequestPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetConnectionRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_connection_request_200_application_json_strings: Optional[List[str]] = field(default=None)
    
