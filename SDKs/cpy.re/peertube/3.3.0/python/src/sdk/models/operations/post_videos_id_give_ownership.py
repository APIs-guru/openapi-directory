from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostVideosIDGiveOwnershipPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosIDGiveOwnershipRequestBody:
    username: str = field(default=None, metadata={'form': { 'field_name': 'username' }})
    

@dataclass
class PostVideosIDGiveOwnershipSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosIDGiveOwnershipRequest:
    path_params: PostVideosIDGiveOwnershipPathParams = field(default=None)
    request: PostVideosIDGiveOwnershipRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PostVideosIDGiveOwnershipSecurity = field(default=None)
    

@dataclass
class PostVideosIDGiveOwnershipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
