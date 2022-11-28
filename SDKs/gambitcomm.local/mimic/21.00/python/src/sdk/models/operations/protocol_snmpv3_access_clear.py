from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3AccessClearPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3AccessClearRequest:
    path_params: ProtocolSnmpv3AccessClearPathParams = field()
    

@dataclass
class ProtocolSnmpv3AccessClearResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_access_clear_200_application_json_string: Optional[str] = field(default=None)
    
