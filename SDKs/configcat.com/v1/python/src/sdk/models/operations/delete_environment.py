from dataclasses import dataclass, field



@dataclass
class DeleteEnvironmentPathParams:
    environment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = field(default=None)
    

@dataclass
class DeleteEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
