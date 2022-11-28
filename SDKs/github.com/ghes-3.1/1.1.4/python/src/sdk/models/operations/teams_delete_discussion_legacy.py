from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionLegacyPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionLegacyRequest:
    path_params: TeamsDeleteDiscussionLegacyPathParams = field()
    

@dataclass
class TeamsDeleteDiscussionLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    
