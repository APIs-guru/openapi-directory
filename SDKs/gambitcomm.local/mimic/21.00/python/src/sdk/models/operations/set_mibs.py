from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SetMibsPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetMibsRequest:
    path_params: SetMibsPathParams = field(default=None)
    request: List[shared.Triplet] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetMibsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_mibs_200_application_json_string: Optional[str] = field(default=None)
    
