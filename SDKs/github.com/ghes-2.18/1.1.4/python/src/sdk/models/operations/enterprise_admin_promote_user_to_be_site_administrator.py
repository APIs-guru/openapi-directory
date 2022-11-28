from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorRequest:
    path_params: EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams = field()
    

@dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorResponse:
    content_type: str = field()
    status_code: int = field()
    
