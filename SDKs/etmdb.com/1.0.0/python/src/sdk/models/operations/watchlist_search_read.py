from dataclasses import dataclass, field



@dataclass
class WatchlistSearchReadPathParams:
    movie_title: str = field(metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class WatchlistSearchReadRequest:
    path_params: WatchlistSearchReadPathParams = field()
    

@dataclass
class WatchlistSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
