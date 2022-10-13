from dataclasses import dataclass, field



@dataclass
class FilmographySearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographySearchReadRequest:
    path_params: FilmographySearchReadPathParams = field(default=None)
    

@dataclass
class FilmographySearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
