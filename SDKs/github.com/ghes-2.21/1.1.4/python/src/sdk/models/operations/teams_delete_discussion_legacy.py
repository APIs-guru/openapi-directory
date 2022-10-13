from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionLegacyPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionLegacyRequest:
    path_params: TeamsDeleteDiscussionLegacyPathParams = field(default=None)
    

@dataclass
class TeamsDeleteDiscussionLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
