from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
