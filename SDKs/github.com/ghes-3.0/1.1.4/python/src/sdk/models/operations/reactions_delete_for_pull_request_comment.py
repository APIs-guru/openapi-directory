from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForPullRequestCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForPullRequestCommentRequest:
    path_params: ReactionsDeleteForPullRequestCommentPathParams = field(default=None)
    

@dataclass
class ReactionsDeleteForPullRequestCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
