from dataclasses import dataclass, field



@dataclass
class CinemaSheduleShowtimeSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaSheduleShowtimeSearchReadRequest:
    path_params: CinemaSheduleShowtimeSearchReadPathParams = field()
    

@dataclass
class CinemaSheduleShowtimeSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
