from dataclasses import dataclass, field



@dataclass
class CinemaDetailSearchReadPathParams:
    cinema_name: str = field(default=None, metadata={'path_param': { 'field_name': 'cinema_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaDetailSearchReadRequest:
    path_params: CinemaDetailSearchReadPathParams = field(default=None)
    

@dataclass
class CinemaDetailSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
