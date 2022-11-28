from dataclasses import dataclass, field



@dataclass
class DeleteFileCommentReactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFileCommentReactionsIDRequest:
    path_params: DeleteFileCommentReactionsIDPathParams = field()
    

@dataclass
class DeleteFileCommentReactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
