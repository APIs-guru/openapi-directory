from dataclasses import dataclass, field



@dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field(default=None)
    

@dataclass
class ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
