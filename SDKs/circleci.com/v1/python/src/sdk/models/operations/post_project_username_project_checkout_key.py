from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectCheckoutKeyPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class PostProjectUsernameProjectCheckoutKeyRequestBodyEnum(str, Enum):
    DEPLOY_KEY = "deploy-key"
    GITHUB_USER_KEY = "github-user-key"


@dataclass
class PostProjectUsernameProjectCheckoutKeyRequest:
    path_params: PostProjectUsernameProjectCheckoutKeyPathParams = field(default=None)
    request: Optional[PostProjectUsernameProjectCheckoutKeyRequestBodyEnum] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProjectUsernameProjectCheckoutKeyResponse:
    content_type: str = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    status_code: int = field(default=None)
    
