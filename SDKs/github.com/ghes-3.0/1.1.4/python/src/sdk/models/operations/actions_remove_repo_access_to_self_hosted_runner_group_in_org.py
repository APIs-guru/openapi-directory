from dataclasses import dataclass, field



@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field()
    

@dataclass
class ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
