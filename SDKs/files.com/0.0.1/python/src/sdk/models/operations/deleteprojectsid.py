from dataclasses import dataclass, field



@dataclass
class DeleteProjectsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectsIDRequest:
    path_params: DeleteProjectsIDPathParams = field()
    

@dataclass
class DeleteProjectsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
