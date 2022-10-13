from dataclasses import dataclass, field



@dataclass
class CinemaSheduleShowtimeSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSheduleShowtimeSearchReadRequest:
    path_params: CinemaSheduleShowtimeSearchReadPathParams = field(default=None)
    

@dataclass
class CinemaSheduleShowtimeSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
