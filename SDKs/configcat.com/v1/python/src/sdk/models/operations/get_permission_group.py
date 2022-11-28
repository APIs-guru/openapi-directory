from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPermissionGroupPathParams:
    permission_group_id: int = field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPermissionGroupRequest:
    path_params: GetPermissionGroupPathParams = field()
    

@dataclass
class GetPermissionGroupResponse:
    content_type: str = field()
    status_code: int = field()
    permission_group_model: Optional[shared.PermissionGroupModel] = field(default=None)
    
