from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3UserClearPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UserClearRequest:
    path_params: ProtocolSnmpv3UserClearPathParams = field()
    

@dataclass
class ProtocolSnmpv3UserClearResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_user_clear_200_application_json_string: Optional[str] = field(default=None)
    
