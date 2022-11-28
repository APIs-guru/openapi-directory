from dataclasses import dataclass, field



@dataclass
class IssuesDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesDeleteCommentRequest:
    path_params: IssuesDeleteCommentPathParams = field()
    

@dataclass
class IssuesDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
