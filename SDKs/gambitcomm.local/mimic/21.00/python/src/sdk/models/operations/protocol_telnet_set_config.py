from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTelnetSetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(default=None, metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetSetConfigRequest:
    path_params: ProtocolTelnetSetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolTelnetSetConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_telnet_set_config_200_application_json_string: Optional[str] = field(default=None)
    
