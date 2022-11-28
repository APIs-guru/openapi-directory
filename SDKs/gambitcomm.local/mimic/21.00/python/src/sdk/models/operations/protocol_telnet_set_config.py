from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolTelnetSetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolTelnetSetConfigRequest:
    path_params: ProtocolTelnetSetConfigPathParams = field()
    

@dataclass
class ProtocolTelnetSetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_telnet_set_config_200_application_json_string: Optional[str] = field(default=None)
    
