from dataclasses import dataclass, field



@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgRequest:
    path_params: ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams = field()
    

@dataclass
class ActionsDeleteSelfHostedRunnerGroupFromOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
