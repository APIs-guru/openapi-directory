from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
