from dataclasses import dataclass, field



@dataclass
class DeleteServerFollowingHostOrHandlePathParams:
    host_or_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'hostOrHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteServerFollowingHostOrHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteServerFollowingHostOrHandleRequest:
    path_params: DeleteServerFollowingHostOrHandlePathParams = field(default=None)
    security: DeleteServerFollowingHostOrHandleSecurity = field(default=None)
    

@dataclass
class DeleteServerFollowingHostOrHandleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
