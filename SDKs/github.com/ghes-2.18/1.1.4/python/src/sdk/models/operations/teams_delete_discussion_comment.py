from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class TeamsDeleteDiscussionCommentRequest:
    path_params: TeamsDeleteDiscussionCommentPathParams = field(default=None)
    headers: TeamsDeleteDiscussionCommentHeaders = field(default=None)
    

@dataclass
class TeamsDeleteDiscussionCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
