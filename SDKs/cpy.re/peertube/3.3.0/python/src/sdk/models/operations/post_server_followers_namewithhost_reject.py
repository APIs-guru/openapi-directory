from dataclasses import dataclass, field



@dataclass
class PostServerFollowersNameWithHostRejectPathParams:
    name_with_host: str = field(default=None, metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServerFollowersNameWithHostRejectSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowersNameWithHostRejectRequest:
    path_params: PostServerFollowersNameWithHostRejectPathParams = field(default=None)
    security: PostServerFollowersNameWithHostRejectSecurity = field(default=None)
    

@dataclass
class PostServerFollowersNameWithHostRejectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
