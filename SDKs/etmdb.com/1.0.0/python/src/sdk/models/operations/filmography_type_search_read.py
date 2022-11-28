from dataclasses import dataclass, field



@dataclass
class FilmographyTypeSearchReadPathParams:
    filmography_description: str = field(metadata={'path_param': { 'field_name': 'filmography_description', 'style': 'simple', 'explode': False }})
    

@dataclass
class FilmographyTypeSearchReadRequest:
    path_params: FilmographyTypeSearchReadPathParams = field()
    

@dataclass
class FilmographyTypeSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
