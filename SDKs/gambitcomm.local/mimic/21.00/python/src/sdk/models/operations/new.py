from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class NewPathParams:
    ip: str = field(default=None, metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewRequest:
    path_params: NewPathParams = field(default=None)
    request: List[shared.Triplet] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    new_200_application_json_string: Optional[str] = field(default=None)
    
