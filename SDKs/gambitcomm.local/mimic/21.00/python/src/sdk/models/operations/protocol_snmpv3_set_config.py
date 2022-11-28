from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3SetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = field(metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3SetConfigRequest:
    path_params: ProtocolSnmpv3SetConfigPathParams = field()
    

@dataclass
class ProtocolSnmpv3SetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_set_config_200_application_json_string: Optional[str] = field(default=None)
    
