from dataclasses import dataclass, field



@dataclass
class DeleteStylesPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStylesPathRequest:
    path_params: DeleteStylesPathPathParams = field()
    

@dataclass
class DeleteStylesPathResponse:
    content_type: str = field()
    status_code: int = field()
    
