from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
