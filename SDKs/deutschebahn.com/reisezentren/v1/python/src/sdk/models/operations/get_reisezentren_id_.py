from dataclasses import dataclass, field



@dataclass
class GetReisezentrenIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReisezentrenIDRequest:
    path_params: GetReisezentrenIDPathParams = field(default=None)
    

@dataclass
class GetReisezentrenIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
