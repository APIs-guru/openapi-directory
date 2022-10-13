from dataclasses import dataclass, field



@dataclass
class MovieSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MovieSearchReadRequest:
    path_params: MovieSearchReadPathParams = field(default=None)
    

@dataclass
class MovieSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
