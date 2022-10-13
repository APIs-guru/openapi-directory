from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorRequest:
    path_params: EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
