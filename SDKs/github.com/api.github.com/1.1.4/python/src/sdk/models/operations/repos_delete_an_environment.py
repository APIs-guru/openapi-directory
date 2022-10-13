from dataclasses import dataclass, field



@dataclass
class ReposDeleteAnEnvironmentPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteAnEnvironmentRequest:
    path_params: ReposDeleteAnEnvironmentPathParams = field(default=None)
    

@dataclass
class ReposDeleteAnEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
