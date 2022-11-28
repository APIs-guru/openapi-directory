from dataclasses import dataclass, field



@dataclass
class DeleteRemoteServersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRemoteServersIDRequest:
    path_params: DeleteRemoteServersIDPathParams = field()
    

@dataclass
class DeleteRemoteServersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
