from dataclasses import dataclass, field



@dataclass
class GenreSearchallReadPathParams:
    movie_genre_type: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_genre_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreSearchallReadRequest:
    path_params: GenreSearchallReadPathParams = field(default=None)
    

@dataclass
class GenreSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
