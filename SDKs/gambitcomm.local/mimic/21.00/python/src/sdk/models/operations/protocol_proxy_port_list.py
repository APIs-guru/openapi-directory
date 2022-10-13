from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolProxyPortListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxyPortListRequest:
    path_params: ProtocolProxyPortListPathParams = field(default=None)
    

@dataclass
class ProtocolProxyPortListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_proxy_port_list_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
