from dataclasses import dataclass, field



@dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest:
    path_params: ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams = field()
    

@dataclass
class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
