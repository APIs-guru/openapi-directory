from dataclasses import dataclass, field



@dataclass
class DeleteGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupsIDRequest:
    path_params: DeleteGroupsIDPathParams = field()
    

@dataclass
class DeleteGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
