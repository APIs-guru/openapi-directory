from dataclasses import dataclass, field



@dataclass
class GenreSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreSearchReadRequest:
    path_params: GenreSearchReadPathParams = field()
    

@dataclass
class GenreSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
