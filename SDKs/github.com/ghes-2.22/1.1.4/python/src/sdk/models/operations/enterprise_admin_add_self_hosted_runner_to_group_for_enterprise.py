from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest:
    path_params: EnterpriseAdminAddSelfHostedRunnerToGroupForEnterprisePathParams = field(default=None)
    

@dataclass
class EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
