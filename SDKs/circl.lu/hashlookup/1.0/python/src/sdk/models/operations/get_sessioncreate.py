from dataclasses import dataclass, field



@dataclass
class GetSessioncreatePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSessioncreateRequest:
    path_params: GetSessioncreatePathParams = field()
    

@dataclass
class GetSessioncreateResponse:
    content_type: str = field()
    status_code: int = field()
    
