from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GetEnginetimePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetEnginetimeRequest:
    path_params: ProtocolSnmpv3GetEnginetimePathParams = field()
    

@dataclass
class ProtocolSnmpv3GetEnginetimeResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_get_enginetime_200_application_json_int32_integer: Optional[int] = field(default=None)
    
