from dataclasses import dataclass, field



@dataclass
class DeleteEnvironmentPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = field()
    

@dataclass
class DeleteEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    
