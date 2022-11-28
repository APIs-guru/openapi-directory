from dataclasses import dataclass, field



@dataclass
class DeleteRequestsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRequestsIDRequest:
    path_params: DeleteRequestsIDPathParams = field()
    

@dataclass
class DeleteRequestsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
