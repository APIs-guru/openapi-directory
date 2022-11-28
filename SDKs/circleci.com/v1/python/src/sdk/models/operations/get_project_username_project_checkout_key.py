from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectCheckoutKeyPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyPathParams = field()
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyResponse:
    content_type: str = field()
    status_code: int = field()
    keys: Optional[List[shared.Key]] = field(default=None)
    
