from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionCommentInOrgPathParams:
    comment_number: int = field(metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionCommentInOrgRequest:
    path_params: TeamsDeleteDiscussionCommentInOrgPathParams = field()
    

@dataclass
class TeamsDeleteDiscussionCommentInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
