from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentLegacyPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentLegacyRequest:
    path_params: TeamsDeleteDiscussionCommentLegacyPathParams = field()
    

@dataclass
class TeamsDeleteDiscussionCommentLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    
