from dataclasses import dataclass, field



@dataclass
class MovieSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class MovieSearchReadRequest:
    path_params: MovieSearchReadPathParams = field()
    

@dataclass
class MovieSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
