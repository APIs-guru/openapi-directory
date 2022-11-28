from dataclasses import dataclass, field



@dataclass
class CinemaScheduleSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaScheduleSearchallReadRequest:
    path_params: CinemaScheduleSearchallReadPathParams = field()
    

@dataclass
class CinemaScheduleSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
