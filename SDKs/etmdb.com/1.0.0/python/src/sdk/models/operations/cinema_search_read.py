from dataclasses import dataclass, field



@dataclass
class CinemaSearchReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSearchReadRequest:
    path_params: CinemaSearchReadPathParams = field(default=None)
    

@dataclass
class CinemaSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
