from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3SetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    parameter: str = field(default=None, metadata={'path_param': { 'field_name': 'parameter', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3SetConfigRequest:
    path_params: ProtocolSnmpv3SetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3SetConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_set_config_200_application_json_string: Optional[str] = field(default=None)
    
