from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ProtocolSnmptcpIpaliasListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmptcpIpaliasListRequest:
    path_params: ProtocolSnmptcpIpaliasListPathParams = field(default=None)
    

@dataclass
class ProtocolSnmptcpIpaliasListResponse:
    content_type: str = field(default=None)
    ip_aliases: Optional[List[shared.IPAlias]] = field(default=None)
    status_code: int = field(default=None)
    
