from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FromListPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class FromListRequest:
    path_params: FromListPathParams = field(default=None)
    

@dataclass
class FromListResponse:
    content_type: str = field(default=None)
    ip_sources: Optional[List[shared.IPSource]] = field(default=None)
    status_code: int = field(default=None)
    
