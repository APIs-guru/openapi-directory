from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
