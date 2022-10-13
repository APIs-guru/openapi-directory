from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetDiscussionCommentInOrgPathParams:
    comment_number: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_number', 'style': 'simple', 'explode': False }})
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetDiscussionCommentInOrgRequest:
    path_params: TeamsGetDiscussionCommentInOrgPathParams = field(default=None)
    

@dataclass
class TeamsGetDiscussionCommentInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
