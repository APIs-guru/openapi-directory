from dataclasses import dataclass, field



@dataclass
class DeleteFileCommentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileCommentsIDRequest:
    path_params: DeleteFileCommentsIDPathParams = field(default=None)
    

@dataclass
class DeleteFileCommentsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
