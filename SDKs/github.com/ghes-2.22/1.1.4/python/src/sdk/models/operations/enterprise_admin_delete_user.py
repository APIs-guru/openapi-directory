from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteUserRequest:
    path_params: EnterpriseAdminDeleteUserPathParams = field()
    

@dataclass
class EnterpriseAdminDeleteUserResponse:
    content_type: str = field()
    status_code: int = field()
    
