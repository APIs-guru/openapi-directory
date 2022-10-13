from dataclasses import dataclass, field



@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgRequest:
    path_params: ActionsAddSelfHostedRunnerToGroupForOrgPathParams = field(default=None)
    

@dataclass
class ActionsAddSelfHostedRunnerToGroupForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
