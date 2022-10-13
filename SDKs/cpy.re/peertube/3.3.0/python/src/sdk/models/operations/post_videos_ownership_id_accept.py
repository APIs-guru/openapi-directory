from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostVideosOwnershipIDAcceptPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosOwnershipIDAcceptSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosOwnershipIDAcceptRequest:
    path_params: PostVideosOwnershipIDAcceptPathParams = field(default=None)
    security: PostVideosOwnershipIDAcceptSecurity = field(default=None)
    

@dataclass
class PostVideosOwnershipIDAcceptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
