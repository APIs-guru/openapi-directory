from dataclasses import dataclass, field



@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest:
    path_params: ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams = field(default=None)
    

@dataclass
class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
