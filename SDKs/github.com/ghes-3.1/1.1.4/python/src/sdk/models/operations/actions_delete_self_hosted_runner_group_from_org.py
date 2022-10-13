from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams = field(default=None)
    

@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
