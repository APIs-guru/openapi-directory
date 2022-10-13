from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMibsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMibsRequest:
    path_params: GetMibsPathParams = field(default=None)
    

@dataclass
class GetMibsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    triplets: Optional[List[shared.Triplet]] = field(default=None)
    
