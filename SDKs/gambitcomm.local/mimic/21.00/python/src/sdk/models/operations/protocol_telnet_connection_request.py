from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionRequestPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    command: str = field(metadata={'path_param': { 'field_name': 'command', 'style': 'simple', 'explode': False }})
    connection_id: int = field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionRequestRequest:
    path_params: ProtocolTelnetConnectionRequestPathParams = field()
    

@dataclass
class ProtocolTelnetConnectionRequestResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_telnet_connection_request_200_application_json_strings: Optional[List[str]] = field(default=None)
    
