from dataclasses import dataclass, field



@dataclass
class GenreSearchallReadPathParams:
    movie_genre_type: str = field(metadata={'path_param': { 'field_name': 'movie_genre_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreSearchallReadRequest:
    path_params: GenreSearchallReadPathParams = field()
    

@dataclass
class GenreSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
