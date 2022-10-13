from dataclasses import dataclass, field



@dataclass
class WatchlistSearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class WatchlistSearchallReadRequest:
    path_params: WatchlistSearchallReadPathParams = field(default=None)
    

@dataclass
class WatchlistSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
