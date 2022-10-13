from dataclasses import dataclass, field



@dataclass
class DeleteRequestsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRequestsIDRequest:
    path_params: DeleteRequestsIDPathParams = field(default=None)
    

@dataclass
class DeleteRequestsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
