from dataclasses import dataclass, field



@dataclass
class ShowtimeSearchallReadPathParams:
    param: str = field(default=None, metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowtimeSearchallReadRequest:
    path_params: ShowtimeSearchallReadPathParams = field(default=None)
    

@dataclass
class ShowtimeSearchallReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
