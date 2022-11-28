from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteServerFollowersNameWithHostPathParams:
    name_with_host: str = field(metadata={'path_param': { 'field_name': 'nameWithHost', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerFollowersNameWithHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerFollowersNameWithHostRequest:
    path_params: DeleteServerFollowersNameWithHostPathParams = field()
    security: DeleteServerFollowersNameWithHostSecurity = field()
    

@dataclass
class DeleteServerFollowersNameWithHostResponse:
    content_type: str = field()
    status_code: int = field()
    
