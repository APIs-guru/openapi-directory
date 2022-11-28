from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostServerFollowersNameWithHostAcceptPathParams:
    name_with_host: str = field(metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServerFollowersNameWithHostAcceptSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowersNameWithHostAcceptRequest:
    path_params: PostServerFollowersNameWithHostAcceptPathParams = field()
    security: PostServerFollowersNameWithHostAcceptSecurity = field()
    

@dataclass
class PostServerFollowersNameWithHostAcceptResponse:
    content_type: str = field()
    status_code: int = field()
    
