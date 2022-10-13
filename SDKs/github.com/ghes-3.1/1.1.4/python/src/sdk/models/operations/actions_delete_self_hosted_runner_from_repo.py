from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromRepoPathParams = field(default=None)
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
