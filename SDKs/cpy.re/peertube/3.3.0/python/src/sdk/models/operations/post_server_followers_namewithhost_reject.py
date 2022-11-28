from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostServerFollowersNameWithHostRejectPathParams:
    name_with_host: str = field(metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServerFollowersNameWithHostRejectSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowersNameWithHostRejectRequest:
    path_params: PostServerFollowersNameWithHostRejectPathParams = field()
    security: PostServerFollowersNameWithHostRejectSecurity = field()
    

@dataclass
class PostServerFollowersNameWithHostRejectResponse:
    content_type: str = field()
    status_code: int = field()
    
