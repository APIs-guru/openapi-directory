from dataclasses import dataclass, field



@dataclass
class DeletePermissionGroupPathParams:
    permission_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePermissionGroupRequest:
    path_params: DeletePermissionGroupPathParams = field(default=None)
    

@dataclass
class DeletePermissionGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
