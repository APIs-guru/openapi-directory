from dataclasses import dataclass, field



@dataclass
class MediaSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MediaSearchReadRequest:
    path_params: MediaSearchReadPathParams = field()
    

@dataclass
class MediaSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
