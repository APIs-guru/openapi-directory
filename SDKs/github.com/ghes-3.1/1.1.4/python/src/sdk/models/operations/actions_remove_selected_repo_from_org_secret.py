from dataclasses import dataclass, field



@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretRequest:
    path_params: ActionsRemoveSelectedRepoFromOrgSecretPathParams = field(default=None)
    

@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
