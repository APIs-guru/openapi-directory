from dataclasses import dataclass, field



@dataclass
class MediaSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MediaSearchReadRequest:
    path_params: MediaSearchReadPathParams = field(default=None)
    

@dataclass
class MediaSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
