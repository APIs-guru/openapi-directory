from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = field(default=None, metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
