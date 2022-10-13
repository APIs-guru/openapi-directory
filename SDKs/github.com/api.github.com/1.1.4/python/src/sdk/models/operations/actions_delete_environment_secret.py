from dataclasses import dataclass, field



@dataclass
class ActionsDeleteEnvironmentSecretPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(default=None, metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteEnvironmentSecretRequest:
    path_params: ActionsDeleteEnvironmentSecretPathParams = field(default=None)
    

@dataclass
class ActionsDeleteEnvironmentSecretResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
