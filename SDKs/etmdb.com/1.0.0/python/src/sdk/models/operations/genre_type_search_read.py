from dataclasses import dataclass, field



@dataclass
class GenreTypeSearchReadPathParams:
    genre_description: str = field(metadata={'path_param': { 'field_name': 'genre_description', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreTypeSearchReadRequest:
    path_params: GenreTypeSearchReadPathParams = field()
    

@dataclass
class GenreTypeSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
