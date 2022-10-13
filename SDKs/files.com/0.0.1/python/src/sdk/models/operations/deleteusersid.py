from dataclasses import dataclass, field



@dataclass
class DeleteUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersIDRequest:
    path_params: DeleteUsersIDPathParams = field(default=None)
    

@dataclass
class DeleteUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
