from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3ViewListPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3ViewListRequest:
    path_params: ProtocolSnmpv3ViewListPathParams = field()
    

@dataclass
class ProtocolSnmpv3ViewListResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_view_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
