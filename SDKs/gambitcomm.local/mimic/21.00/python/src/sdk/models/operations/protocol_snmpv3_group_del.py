from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GroupDelPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    group_name: str = field(metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GroupDelRequest:
    path_params: ProtocolSnmpv3GroupDelPathParams = field()
    

@dataclass
class ProtocolSnmpv3GroupDelResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_group_del_200_application_json_string: Optional[str] = field(default=None)
    
