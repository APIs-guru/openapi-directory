from dataclasses import dataclass, field



@dataclass
class MovieCastSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MovieCastSearchReadRequest:
    path_params: MovieCastSearchReadPathParams = field()
    

@dataclass
class MovieCastSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
