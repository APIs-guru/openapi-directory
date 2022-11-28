from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForIssueCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForIssueCommentRequest:
    path_params: ReactionsDeleteForIssueCommentPathParams = field()
    

@dataclass
class ReactionsDeleteForIssueCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
