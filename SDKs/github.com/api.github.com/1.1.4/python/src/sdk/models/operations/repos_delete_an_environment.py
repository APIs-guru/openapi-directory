from dataclasses import dataclass, field



@dataclass
class ReposDeleteAnEnvironmentPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteAnEnvironmentRequest:
    path_params: ReposDeleteAnEnvironmentPathParams = field()
    

@dataclass
class ReposDeleteAnEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    
