from dataclasses import dataclass, field



@dataclass
class FilmographySearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographySearchallReadRequest:
    path_params: FilmographySearchallReadPathParams = field()
    

@dataclass
class FilmographySearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
