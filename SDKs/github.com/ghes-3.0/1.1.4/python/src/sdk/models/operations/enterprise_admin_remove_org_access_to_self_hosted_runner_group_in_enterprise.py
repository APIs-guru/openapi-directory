from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
