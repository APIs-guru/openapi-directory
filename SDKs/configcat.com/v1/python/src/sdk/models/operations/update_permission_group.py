from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePermissionGroupPathParams:
    permission_group_id: int = field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePermissionGroupRequests:
    update_permission_group_request: Optional[shared.UpdatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_permission_group_request1: Optional[shared.UpdatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_permission_group_request2: Optional[shared.UpdatePermissionGroupRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdatePermissionGroupRequest:
    path_params: UpdatePermissionGroupPathParams = field()
    request: UpdatePermissionGroupRequests = field()
    

@dataclass
class UpdatePermissionGroupResponse:
    content_type: str = field()
    status_code: int = field()
    permission_group_model: Optional[shared.PermissionGroupModel] = field(default=None)
    
