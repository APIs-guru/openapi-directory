from dataclasses import dataclass, field



@dataclass
class ActionsAddSelectedRepoToOrgSecretPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsAddSelectedRepoToOrgSecretRequest:
    path_params: ActionsAddSelectedRepoToOrgSecretPathParams = field(default=None)
    

@dataclass
class ActionsAddSelectedRepoToOrgSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
