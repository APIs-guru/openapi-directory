from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest:
    path_params: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
