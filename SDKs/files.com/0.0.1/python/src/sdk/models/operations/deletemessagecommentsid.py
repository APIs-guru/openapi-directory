from dataclasses import dataclass, field



@dataclass
class DeleteMessageCommentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageCommentsIDRequest:
    path_params: DeleteMessageCommentsIDPathParams = field(default=None)
    

@dataclass
class DeleteMessageCommentsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
