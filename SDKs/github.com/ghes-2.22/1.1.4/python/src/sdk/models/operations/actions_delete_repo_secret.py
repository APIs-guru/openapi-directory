from dataclasses import dataclass, field



@dataclass
class ActionsDeleteRepoSecretPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteRepoSecretRequest:
    path_params: ActionsDeleteRepoSecretPathParams = field()
    

@dataclass
class ActionsDeleteRepoSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
