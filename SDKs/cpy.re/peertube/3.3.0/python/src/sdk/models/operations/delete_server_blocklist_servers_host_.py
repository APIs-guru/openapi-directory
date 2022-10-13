from dataclasses import dataclass, field



@dataclass
class DeleteServerBlocklistServersHostPathParams:
    host: str = field(default=None, metadata={'path_param': { 'field_name': 'host', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerBlocklistServersHostSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerBlocklistServersHostRequest:
    path_params: DeleteServerBlocklistServersHostPathParams = field(default=None)
    security: DeleteServerBlocklistServersHostSecurity = field(default=None)
    

@dataclass
class DeleteServerBlocklistServersHostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
