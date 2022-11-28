from dataclasses import dataclass, field



@dataclass
class PeopleSearchReadPathParams:
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class PeopleSearchReadRequest:
    path_params: PeopleSearchReadPathParams = field()
    

@dataclass
class PeopleSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
