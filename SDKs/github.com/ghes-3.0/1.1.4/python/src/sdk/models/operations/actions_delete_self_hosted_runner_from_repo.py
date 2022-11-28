from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromRepoPathParams = field()
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromRepoResponse:
    content_type: str = field()
    status_code: int = field()
    
