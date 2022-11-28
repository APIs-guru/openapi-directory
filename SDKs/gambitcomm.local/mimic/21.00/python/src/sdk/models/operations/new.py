from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class NewPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewRequest:
    path_params: NewPathParams = field()
    request: List[shared.Triplet] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NewResponse:
    content_type: str = field()
    status_code: int = field()
    new_200_application_json_string: Optional[str] = field(default=None)
    
