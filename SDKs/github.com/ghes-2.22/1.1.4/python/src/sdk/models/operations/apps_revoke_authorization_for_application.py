from dataclasses import dataclass, field



@dataclass
class AppsRevokeAuthorizationForApplicationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsRevokeAuthorizationForApplicationRequest:
    path_params: AppsRevokeAuthorizationForApplicationPathParams = field()
    

@dataclass
class AppsRevokeAuthorizationForApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
