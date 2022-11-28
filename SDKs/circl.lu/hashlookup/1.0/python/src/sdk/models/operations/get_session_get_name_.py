from dataclasses import dataclass, field



@dataclass
class GetSessionGetNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSessionGetNameRequest:
    path_params: GetSessionGetNamePathParams = field()
    

@dataclass
class GetSessionGetNameResponse:
    content_type: str = field()
    status_code: int = field()
    
