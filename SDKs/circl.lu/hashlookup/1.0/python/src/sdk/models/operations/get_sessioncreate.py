from dataclasses import dataclass, field



@dataclass
class GetSessioncreatePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSessioncreateRequest:
    path_params: GetSessioncreatePathParams = field(default=None)
    

@dataclass
class GetSessioncreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
