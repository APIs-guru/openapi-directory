from dataclasses import dataclass, field



@dataclass
class MediaSearchallReadPathParams:
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class MediaSearchallReadRequest:
    path_params: MediaSearchallReadPathParams = field(default=None)
    

@dataclass
class MediaSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
