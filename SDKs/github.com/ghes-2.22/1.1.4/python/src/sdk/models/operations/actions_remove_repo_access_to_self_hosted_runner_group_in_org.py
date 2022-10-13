from dataclasses import dataclass, field



@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field(default=None)
    

@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
