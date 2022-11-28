from dataclasses import dataclass, field



@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgRequest:
    path_params: ActionsAddSelfHostedRunnerToGroupForOrgPathParams = field()
    

@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
