from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectCheckoutKeyPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyPathParams = field(default=None)
    

@dataclass
class GetProjectUsernameProjectCheckoutKeyResponse:
    content_type: str = field(default=None)
    keys: Optional[List[shared.Key]] = field(default=None)
    status_code: int = field(default=None)
    
