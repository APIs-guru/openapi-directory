from dataclasses import dataclass, field



@dataclass
class DeleteMessageCommentReactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageCommentReactionsIDRequest:
    path_params: DeleteMessageCommentReactionsIDPathParams = field()
    

@dataclass
class DeleteMessageCommentReactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
