from dataclasses import dataclass, field



@dataclass
class DeleteStylesPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStylesPathRequest:
    path_params: DeleteStylesPathPathParams = field(default=None)
    

@dataclass
class DeleteStylesPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
