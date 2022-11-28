from dataclasses import dataclass, field



@dataclass
class DeleteUserRequestsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserRequestsIDRequest:
    path_params: DeleteUserRequestsIDPathParams = field()
    

@dataclass
class DeleteUserRequestsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
