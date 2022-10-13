from dataclasses import dataclass, field



@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDPathParams:
    board_id: str = field(default=None, metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    comment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDRequest:
    path_params: DeleteV3BoardsBoardIDCommentsCommentIDPathParams = field(default=None)
    

@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
