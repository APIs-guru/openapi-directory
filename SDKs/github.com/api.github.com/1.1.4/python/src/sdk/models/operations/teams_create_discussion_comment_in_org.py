from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsCreateDiscussionCommentInOrgPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class TeamsCreateDiscussionCommentInOrgRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class TeamsCreateDiscussionCommentInOrgRequest:
    path_params: TeamsCreateDiscussionCommentInOrgPathParams = field(default=None)
    request: Optional[TeamsCreateDiscussionCommentInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsCreateDiscussionCommentInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_discussion_comment: Optional[shared.TeamDiscussionComment] = field(default=None)
    
