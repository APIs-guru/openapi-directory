from dataclasses import dataclass, field



@dataclass
class DeleteServerFollowersNameWithHostPathParams:
    name_with_host: str = field(default=None, metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerFollowersNameWithHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerFollowersNameWithHostRequest:
    path_params: DeleteServerFollowersNameWithHostPathParams = field(default=None)
    security: DeleteServerFollowersNameWithHostSecurity = field(default=None)
    

@dataclass
class DeleteServerFollowersNameWithHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
