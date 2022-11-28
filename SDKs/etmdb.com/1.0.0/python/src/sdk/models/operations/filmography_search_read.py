from dataclasses import dataclass, field



@dataclass
class FilmographySearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographySearchReadRequest:
    path_params: FilmographySearchReadPathParams = field()
    

@dataclass
class FilmographySearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
