from dataclasses import dataclass, field



@dataclass
class WatchlistSearchReadPathParams:
    movie_title: str = field(default=None, metadata={'path_param': { 'field_name': 'movie_title', 'style': 'simple', 'explode': False }})
    

@dataclass
class WatchlistSearchReadRequest:
    path_params: WatchlistSearchReadPathParams = field(default=None)
    

@dataclass
class WatchlistSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
