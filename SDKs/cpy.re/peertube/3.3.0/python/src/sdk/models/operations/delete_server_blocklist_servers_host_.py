from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteServerBlocklistServersHostPathParams:
    host: str = field(metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerBlocklistServersHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerBlocklistServersHostRequest:
    path_params: DeleteServerBlocklistServersHostPathParams = field()
    security: DeleteServerBlocklistServersHostSecurity = field()
    

@dataclass
class DeleteServerBlocklistServersHostResponse:
    content_type: str = field()
    status_code: int = field()
    
