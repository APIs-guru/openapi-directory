from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListIpaliasesPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIpaliasesRequest:
    path_params: ListIpaliasesPathParams = field()
    

@dataclass
class ListIpaliasesResponse:
    content_type: str = field()
    status_code: int = field()
    ip_aliases: Optional[List[shared.IPAlias]] = field(default=None)
    
