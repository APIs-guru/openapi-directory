from dataclasses import dataclass, field



@dataclass
class MovieCastSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class MovieCastSearchallReadRequest:
    path_params: MovieCastSearchallReadPathParams = field()
    

@dataclass
class MovieCastSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
