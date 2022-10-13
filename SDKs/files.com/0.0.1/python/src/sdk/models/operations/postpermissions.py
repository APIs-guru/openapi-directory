from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPermissionsRequestBody:
    group_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'permission' }})
    recursive: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclass
class PostPermissionsRequest:
    request: Optional[PostPermissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostPermissionsResponse:
    content_type: str = field(default=None)
    permission_entity: Optional[shared.PermissionEntity] = field(default=None)
    status_code: int = field(default=None)
    
