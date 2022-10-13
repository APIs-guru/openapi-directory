from dataclasses import dataclass, field



@dataclass
class CinemaSheduleShowtimeSearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSheduleShowtimeSearchallReadRequest:
    path_params: CinemaSheduleShowtimeSearchallReadPathParams = field(default=None)
    

@dataclass
class CinemaSheduleShowtimeSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
