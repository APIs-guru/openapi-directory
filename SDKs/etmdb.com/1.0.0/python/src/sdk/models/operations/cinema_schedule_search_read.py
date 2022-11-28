from dataclasses import dataclass, field



@dataclass
class CinemaScheduleSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class CinemaScheduleSearchReadRequest:
    path_params: CinemaScheduleSearchReadPathParams = field()
    

@dataclass
class CinemaScheduleSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
