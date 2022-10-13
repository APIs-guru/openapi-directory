from dataclasses import dataclass, field



@dataclass
class GenreSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreSearchReadRequest:
    path_params: GenreSearchReadPathParams = field(default=None)
    

@dataclass
class GenreSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
