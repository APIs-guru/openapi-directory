from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolIpmiSetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(default=None, metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiSetConfigRequest:
    path_params: ProtocolIpmiSetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolIpmiSetConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_ipmi_set_config_200_application_json_string: Optional[str] = field(default=None)
    
