from dataclasses import dataclass, field



@dataclass
class CinemaSearchReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSearchReadRequest:
    path_params: CinemaSearchReadPathParams = field()
    

@dataclass
class CinemaSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
