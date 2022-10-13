from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteUserRequest:
    path_params: EnterpriseAdminDeleteUserPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
