from dataclasses import dataclass, field



@dataclass
class DeleteMessageCommentReactionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageCommentReactionsIDRequest:
    path_params: DeleteMessageCommentReactionsIDPathParams = field(default=None)
    

@dataclass
class DeleteMessageCommentReactionsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
