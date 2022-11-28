from dataclasses import dataclass, field



@dataclass
class MediaSearchallReadPathParams:
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class MediaSearchallReadRequest:
    path_params: MediaSearchallReadPathParams = field()
    

@dataclass
class MediaSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
