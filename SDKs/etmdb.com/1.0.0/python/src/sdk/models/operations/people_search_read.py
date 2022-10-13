from dataclasses import dataclass, field



@dataclass
class PeopleSearchReadPathParams:
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class PeopleSearchReadRequest:
    path_params: PeopleSearchReadPathParams = field(default=None)
    

@dataclass
class PeopleSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
