from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = field(metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromOrgPathParams = field()
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
