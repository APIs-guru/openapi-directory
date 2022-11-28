from dataclasses import dataclass, field



@dataclass
class ShowtimeSearchallReadPathParams:
    param: str = field(metadata={'path_param': { 'field_name': 'param', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowtimeSearchallReadRequest:
    path_params: ShowtimeSearchallReadPathParams = field()
    

@dataclass
class ShowtimeSearchallReadResponse:
    content_type: str = field()
    status_code: int = field()
    
