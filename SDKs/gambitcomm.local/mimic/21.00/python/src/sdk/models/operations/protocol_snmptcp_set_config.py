from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmptcpSetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpSetConfigRequest:
    path_params: ProtocolSnmptcpSetConfigPathParams = field()
    

@dataclass
class ProtocolSnmptcpSetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmptcp_set_config_200_application_json_string: Optional[str] = field(default=None)
    
