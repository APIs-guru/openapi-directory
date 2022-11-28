from dataclasses import dataclass, field



@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretRequest:
    path_params: ActionsRemoveSelectedRepoFromOrgSecretPathParams = field()
    

@dataclass
class ActionsRemoveSelectedRepoFromOrgSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
