from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3GroupListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GroupListRequest:
    path_params: ProtocolSnmpv3GroupListPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GroupListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_group_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
