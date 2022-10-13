from dataclasses import dataclass, field



@dataclass
class FilmographySearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographySearchallReadRequest:
    path_params: FilmographySearchallReadPathParams = field(default=None)
    

@dataclass
class FilmographySearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
