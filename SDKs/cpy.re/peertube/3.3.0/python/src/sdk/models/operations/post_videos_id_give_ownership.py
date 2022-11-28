from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class PostVideosIDGiveOwnershipPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosIDGiveOwnershipRequestBody:
    username: str = field(metadata={'form': { 'field_name': 'username' }})
    

@dataclass
class PostVideosIDGiveOwnershipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDGiveOwnershipRequest:
    path_params: PostVideosIDGiveOwnershipPathParams = field()
    request: PostVideosIDGiveOwnershipRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PostVideosIDGiveOwnershipSecurity = field()
    

@dataclass
class PostVideosIDGiveOwnershipResponse:
    content_type: str = field()
    status_code: int = field()
    
