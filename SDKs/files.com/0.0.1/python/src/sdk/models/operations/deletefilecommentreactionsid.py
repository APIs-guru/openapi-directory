from dataclasses import dataclass, field



@dataclass
class DeleteFileCommentReactionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileCommentReactionsIDRequest:
    path_params: DeleteFileCommentReactionsIDPathParams = field(default=None)
    

@dataclass
class DeleteFileCommentReactionsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
