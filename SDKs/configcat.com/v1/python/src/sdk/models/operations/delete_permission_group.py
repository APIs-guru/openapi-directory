from dataclasses import dataclass, field



@dataclass
class DeletePermissionGroupPathParams:
    permission_group_id: int = field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionGroupRequest:
    path_params: DeletePermissionGroupPathParams = field()
    

@dataclass
class DeletePermissionGroupResponse:
    content_type: str = field()
    status_code: int = field()
    
