from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetConnectionSignalPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    connection_id: int = field(metadata={'path_param': { 'field_name': 'connectionID', 'style': 'simple', 'explode': False }})
    signal_name: str = field(metadata={'path_param': { 'field_name': 'signalName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetConnectionSignalRequest:
    path_params: ProtocolTelnetConnectionSignalPathParams = field()
    

@dataclass
class ProtocolTelnetConnectionSignalResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_telnet_connection_signal_200_application_json_strings: Optional[List[str]] = field(default=None)
    
