from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3ViewClearPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3ViewClearRequest:
    path_params: ProtocolSnmpv3ViewClearPathParams = field()
    

@dataclass
class ProtocolSnmpv3ViewClearResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_view_clear_200_application_json_string: Optional[str] = field(default=None)
    
