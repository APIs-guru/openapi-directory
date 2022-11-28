from dataclasses import dataclass, field



@dataclass
class CinemaDetailSearchReadPathParams:
    cinema_name: str = field(metadata={'path_param': { 'field_name': 'cinema_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaDetailSearchReadRequest:
    path_params: CinemaDetailSearchReadPathParams = field()
    

@dataclass
class CinemaDetailSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
