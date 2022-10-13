from dataclasses import dataclass, field



@dataclass
class DeleteRemoteServersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRemoteServersIDRequest:
    path_params: DeleteRemoteServersIDPathParams = field(default=None)
    

@dataclass
class DeleteRemoteServersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
