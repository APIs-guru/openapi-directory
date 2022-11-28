from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForCommitCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForCommitCommentRequest:
    path_params: ReactionsDeleteForCommitCommentPathParams = field()
    

@dataclass
class ReactionsDeleteForCommitCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
