from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentInOrgPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentInOrgRequest:
    path_params: TeamsDeleteDiscussionCommentInOrgPathParams = field(default=None)
    

@dataclass
class TeamsDeleteDiscussionCommentInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
