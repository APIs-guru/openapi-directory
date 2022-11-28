from dataclasses import dataclass, field



@dataclass
class WatchlistSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class WatchlistSearchallReadRequest:
    path_params: WatchlistSearchallReadPathParams = field()
    

@dataclass
class WatchlistSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
