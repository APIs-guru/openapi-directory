from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolTelnetServerGetRulesdbPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetServerGetRulesdbRequest:
    path_params: ProtocolTelnetServerGetRulesdbPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetServerGetRulesdbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_server_get_rulesdb_200_application_json_strings: Optional[List[str]] = field(default=None)
    
