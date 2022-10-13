from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionPathParams:
    discussion_number: int = field(default=None, metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class TeamsDeleteDiscussionRequest:
    path_params: TeamsDeleteDiscussionPathParams = field(default=None)
    headers: TeamsDeleteDiscussionHeaders = field(default=None)
    

@dataclass
class TeamsDeleteDiscussionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
