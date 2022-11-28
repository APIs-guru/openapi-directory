from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDemoteSiteAdministratorPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDemoteSiteAdministratorRequest:
    path_params: EnterpriseAdminDemoteSiteAdministratorPathParams = field()
    

@dataclass
class EnterpriseAdminDemoteSiteAdministratorResponse:
    content_type: str = field()
    status_code: int = field()
    
