from dataclasses import dataclass, field



@dataclass
class DeleteUserRequestsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserRequestsIDRequest:
    path_params: DeleteUserRequestsIDPathParams = field(default=None)
    

@dataclass
class DeleteUserRequestsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
