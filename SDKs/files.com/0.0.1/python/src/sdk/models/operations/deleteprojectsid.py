from dataclasses import dataclass, field



@dataclass
class DeleteProjectsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProjectsIDRequest:
    path_params: DeleteProjectsIDPathParams = field(default=None)
    

@dataclass
class DeleteProjectsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
