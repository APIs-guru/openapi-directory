from dataclasses import dataclass, field



@dataclass
class PostServerFollowersNameWithHostAcceptPathParams:
    name_with_host: str = field(default=None, metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostServerFollowersNameWithHostAcceptSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostServerFollowersNameWithHostAcceptRequest:
    path_params: PostServerFollowersNameWithHostAcceptPathParams = field(default=None)
    security: PostServerFollowersNameWithHostAcceptSecurity = field(default=None)
    

@dataclass
class PostServerFollowersNameWithHostAcceptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
