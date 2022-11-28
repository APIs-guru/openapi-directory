from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteServerFollowingHostOrHandlePathParams:
    host_or_handle: str = field(metadata={'path_param': { 'field_name': 'hostOrHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerFollowingHostOrHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerFollowingHostOrHandleRequest:
    path_params: DeleteServerFollowingHostOrHandlePathParams = field()
    security: DeleteServerFollowingHostOrHandleSecurity = field()
    

@dataclass
class DeleteServerFollowingHostOrHandleResponse:
    content_type: str = field()
    status_code: int = field()
    
