from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class PostVideosOwnershipIDAcceptPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosOwnershipIDAcceptSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosOwnershipIDAcceptRequest:
    path_params: PostVideosOwnershipIDAcceptPathParams = field()
    security: PostVideosOwnershipIDAcceptSecurity = field()
    

@dataclass
class PostVideosOwnershipIDAcceptResponse:
    content_type: str = field()
    status_code: int = field()
    
