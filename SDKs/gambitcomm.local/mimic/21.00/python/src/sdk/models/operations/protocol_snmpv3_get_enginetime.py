from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GetEnginetimePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetEnginetimeRequest:
    path_params: ProtocolSnmpv3GetEnginetimePathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GetEnginetimeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_get_enginetime_200_application_json_int32_integer: Optional[int] = field(default=None)
    
