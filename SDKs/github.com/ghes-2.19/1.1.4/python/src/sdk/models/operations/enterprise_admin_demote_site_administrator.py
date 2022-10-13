from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDemoteSiteAdministratorPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDemoteSiteAdministratorRequest:
    path_params: EnterpriseAdminDemoteSiteAdministratorPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDemoteSiteAdministratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
