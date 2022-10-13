from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentLegacyPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentLegacyRequest:
    path_params: TeamsDeleteDiscussionCommentLegacyPathParams = field(default=None)
    

@dataclass
class TeamsDeleteDiscussionCommentLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
