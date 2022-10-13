from dataclasses import dataclass, field



@dataclass
class CinemaScheduleSearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaScheduleSearchallReadRequest:
    path_params: CinemaScheduleSearchallReadPathParams = field(default=None)
    

@dataclass
class CinemaScheduleSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
