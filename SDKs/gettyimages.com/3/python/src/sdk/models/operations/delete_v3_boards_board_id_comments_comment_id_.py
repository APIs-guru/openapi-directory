from dataclasses import dataclass, field



@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    comment_id: str = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDRequest:
    path_params: DeleteV3BoardsBoardIDCommentsCommentIDPathParams = field()
    

@dataclass
class DeleteV3BoardsBoardIDCommentsCommentIDResponse:
    content_type: str = field()
    status_code: int = field()
    
