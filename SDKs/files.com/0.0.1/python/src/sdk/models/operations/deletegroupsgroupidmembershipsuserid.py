from dataclasses import dataclass, field



@dataclass
class DeleteGroupsGroupIDMembershipsUserIDPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupsGroupIDMembershipsUserIDRequest:
    path_params: DeleteGroupsGroupIDMembershipsUserIDPathParams = field(default=None)
    

@dataclass
class DeleteGroupsGroupIDMembershipsUserIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
