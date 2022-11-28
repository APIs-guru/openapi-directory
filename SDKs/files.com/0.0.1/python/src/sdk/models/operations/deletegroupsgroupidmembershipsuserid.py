from dataclasses import dataclass, field



@dataclass
class DeleteGroupsGroupIDMembershipsUserIDPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupsGroupIDMembershipsUserIDRequest:
    path_params: DeleteGroupsGroupIDMembershipsUserIDPathParams = field()
    

@dataclass
class DeleteGroupsGroupIDMembershipsUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    
