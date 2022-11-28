from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentRequest:
    headers: TeamsDeleteDiscussionCommentHeaders = field()
    path_params: TeamsDeleteDiscussionCommentPathParams = field()
    

@dataclass
class TeamsDeleteDiscussionCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
