from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
