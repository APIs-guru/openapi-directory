from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
