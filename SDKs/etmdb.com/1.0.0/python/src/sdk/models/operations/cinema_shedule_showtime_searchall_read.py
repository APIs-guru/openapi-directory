from dataclasses import dataclass, field



@dataclass
class CinemaSheduleShowtimeSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSheduleShowtimeSearchallReadRequest:
    path_params: CinemaSheduleShowtimeSearchallReadPathParams = field()
    

@dataclass
class CinemaSheduleShowtimeSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
