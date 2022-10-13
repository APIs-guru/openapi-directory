from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchGroupUsersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGroupUsersIDRequestBody:
    admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    group_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PatchGroupUsersIDRequest:
    path_params: PatchGroupUsersIDPathParams = field(default=None)
    request: PatchGroupUsersIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchGroupUsersIDResponse:
    content_type: str = field(default=None)
    group_user_entity: Optional[shared.GroupUserEntity] = field(default=None)
    status_code: int = field(default=None)
    
