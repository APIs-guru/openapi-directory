from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GetEnginebootsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetEnginebootsRequest:
    path_params: ProtocolSnmpv3GetEnginebootsPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GetEnginebootsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_get_engineboots_200_application_json_int32_integer: Optional[int] = field(default=None)
    
