from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    org_id: int = field(metadata={'path_param': { 'field_name': 'org_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
