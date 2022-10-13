from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionSignalPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = field(default=None, metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    signal_name: str = field(default=None, metadata={'path_param': { 'field_name': 'signalName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionSignalRequest:
    path_params: ProtocolTelnetConnectionSignalPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetConnectionSignalResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_connection_signal_200_application_json_strings: Optional[List[str]] = field(default=None)
    
