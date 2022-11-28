from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3UserDelPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    user_name: str = field(metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UserDelRequest:
    path_params: ProtocolSnmpv3UserDelPathParams = field()
    

@dataclass
class ProtocolSnmpv3UserDelResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_user_del_200_application_json_string: Optional[str] = field(default=None)
    
