from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3AccessListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3AccessListRequest:
    path_params: ProtocolSnmpv3AccessListPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3AccessListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_access_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
