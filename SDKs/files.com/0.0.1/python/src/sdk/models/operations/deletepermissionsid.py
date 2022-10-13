from dataclasses import dataclass, field



@dataclass
class DeletePermissionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionsIDRequest:
    path_params: DeletePermissionsIDPathParams = field(default=None)
    

@dataclass
class DeletePermissionsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
