from dataclasses import dataclass, field



@dataclass
class GenreTypeSearchReadPathParams:
    genre_description: str = field(default=None, metadata={'path_param': { 'field_name': 'genre_description', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenreTypeSearchReadRequest:
    path_params: GenreTypeSearchReadPathParams = field(default=None)
    

@dataclass
class GenreTypeSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
