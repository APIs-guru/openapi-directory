from dataclasses import dataclass, field



@dataclass
class CinemaScheduleSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaScheduleSearchReadRequest:
    path_params: CinemaScheduleSearchReadPathParams = field(default=None)
    

@dataclass
class CinemaScheduleSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
