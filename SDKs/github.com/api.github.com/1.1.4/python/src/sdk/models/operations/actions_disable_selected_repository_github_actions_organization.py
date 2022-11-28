from dataclasses import dataclass, field



@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest:
    path_params: ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams = field()
    

@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
