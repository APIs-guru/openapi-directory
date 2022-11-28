from dataclasses import dataclass, field



@dataclass
class ActionsDeleteEnvironmentSecretPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteEnvironmentSecretRequest:
    path_params: ActionsDeleteEnvironmentSecretPathParams = field()
    

@dataclass
class ActionsDeleteEnvironmentSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
