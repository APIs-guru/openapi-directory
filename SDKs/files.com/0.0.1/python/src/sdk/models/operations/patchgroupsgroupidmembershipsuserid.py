from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchGroupsGroupIDMembershipsUserIDPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGroupsGroupIDMembershipsUserIDRequestBody:
    admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclass
class PatchGroupsGroupIDMembershipsUserIDRequest:
    path_params: PatchGroupsGroupIDMembershipsUserIDPathParams = field(default=None)
    request: Optional[PatchGroupsGroupIDMembershipsUserIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchGroupsGroupIDMembershipsUserIDResponse:
    content_type: str = field(default=None)
    group_user_entity: Optional[shared.GroupUserEntity] = field(default=None)
    status_code: int = field(default=None)
    
