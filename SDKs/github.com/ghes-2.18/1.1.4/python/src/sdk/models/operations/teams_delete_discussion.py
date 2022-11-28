from dataclasses import dataclass, field



@dataclass
class TeamsDeleteDiscussionPathParams:
    discussion_number: int = field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteDiscussionRequest:
    headers: TeamsDeleteDiscussionHeaders = field()
    path_params: TeamsDeleteDiscussionPathParams = field()
    

@dataclass
class TeamsDeleteDiscussionResponse:
    content_type: str = field()
    status_code: int = field()
    
