from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerFromOrgPathParams = field(default=None)
    

@dataclass
class ActionsDeleteSelfHostedRunnerFromOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
