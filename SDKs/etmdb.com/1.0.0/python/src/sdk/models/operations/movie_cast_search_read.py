from dataclasses import dataclass, field



@dataclass
class MovieCastSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MovieCastSearchReadRequest:
    path_params: MovieCastSearchReadPathParams = field(default=None)
    

@dataclass
class MovieCastSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
