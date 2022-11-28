from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreatePermissionGroupPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePermissionGroupRequests:
    create_permission_group_request: Optional[shared.CreatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_permission_group_request1: Optional[shared.CreatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_permission_group_request2: Optional[shared.CreatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreatePermissionGroupRequest:
    path_params: CreatePermissionGroupPathParams = field()
    request: CreatePermissionGroupRequests = field()
    

@dataclass
class CreatePermissionGroupResponse:
    content_type: str = field()
    status_code: int = field()
    permission_group_model: Optional[shared.PermissionGroupModel] = field(default=None)
    
