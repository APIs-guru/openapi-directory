from dataclasses import dataclass, field



@dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest:
    path_params: EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterprisePathParams = field()
    

@dataclass
class EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
