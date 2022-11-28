from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class PostVideosOwnershipIDRefusePathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVideosOwnershipIDRefuseSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostVideosOwnershipIDRefuseRequest:
    path_params: PostVideosOwnershipIDRefusePathParams = field()
    security: PostVideosOwnershipIDRefuseSecurity = field()
    

@dataclass
class PostVideosOwnershipIDRefuseResponse:
    content_type: str = field()
    status_code: int = field()
    
