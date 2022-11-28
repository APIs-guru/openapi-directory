from dataclasses import dataclass, field



@dataclass
class AppsRevokeGrantForApplicationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsRevokeGrantForApplicationRequest:
    path_params: AppsRevokeGrantForApplicationPathParams = field()
    

@dataclass
class AppsRevokeGrantForApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    
