from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetServerGetStatePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetServerGetStateRequest:
    path_params: ProtocolTelnetServerGetStatePathParams = field(default=None)
    

@dataclass
class ProtocolTelnetServerGetStateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_server_get_state_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
