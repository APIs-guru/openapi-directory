from dataclasses import dataclass, field



@dataclass
class FilmographyTypeSearchReadPathParams:
    filmography_description: str = field(default=None, metadata={'path_param': { 'field_name': 'filmography_description', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographyTypeSearchReadRequest:
    path_params: FilmographyTypeSearchReadPathParams = field(default=None)
    

@dataclass
class FilmographyTypeSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
