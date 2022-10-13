from dataclasses import dataclass, field



@dataclass
class GetSessionGetNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSessionGetNameRequest:
    path_params: GetSessionGetNamePathParams = field(default=None)
    

@dataclass
class GetSessionGetNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
