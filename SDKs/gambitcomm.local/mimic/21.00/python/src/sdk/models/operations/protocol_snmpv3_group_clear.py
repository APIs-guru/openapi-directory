from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GroupClearPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GroupClearRequest:
    path_params: ProtocolSnmpv3GroupClearPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GroupClearResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_group_clear_200_application_json_string: Optional[str] = field(default=None)
    
