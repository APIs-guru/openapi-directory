from dataclasses import dataclass, field



@dataclass
class DeletePermissionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionsIDRequest:
    path_params: DeletePermissionsIDPathParams = field()
    

@dataclass
class DeletePermissionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
