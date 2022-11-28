from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3UserListPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UserListRequest:
    path_params: ProtocolSnmpv3UserListPathParams = field()
    

@dataclass
class ProtocolSnmpv3UserListResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_user_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
