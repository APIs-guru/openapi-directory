from dataclasses import dataclass, field



@dataclass
class DeleteGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupsIDRequest:
    path_params: DeleteGroupsIDPathParams = field(default=None)
    

@dataclass
class DeleteGroupsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
