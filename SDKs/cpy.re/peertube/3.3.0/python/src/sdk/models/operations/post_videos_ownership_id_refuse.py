from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostVideosOwnershipIDRefusePathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosOwnershipIDRefuseSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosOwnershipIDRefuseRequest:
    path_params: PostVideosOwnershipIDRefusePathParams = field(default=None)
    security: PostVideosOwnershipIDRefuseSecurity = field(default=None)
    

@dataclass
class PostVideosOwnershipIDRefuseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
