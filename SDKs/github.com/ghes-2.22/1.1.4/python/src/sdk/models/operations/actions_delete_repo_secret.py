from dataclasses import dataclass, field



@dataclass
class ActionsDeleteRepoSecretPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteRepoSecretRequest:
    path_params: ActionsDeleteRepoSecretPathParams = field(default=None)
    

@dataclass
class ActionsDeleteRepoSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
