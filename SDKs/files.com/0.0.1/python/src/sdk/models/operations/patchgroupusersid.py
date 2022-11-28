from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchGroupUsersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGroupUsersIDRequestBody:
    group_id: int = field(metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = field(metadata={'multipart_form': { 'field_name': 'user_id' }})
    admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclass
class PatchGroupUsersIDRequest:
    path_params: PatchGroupUsersIDPathParams = field()
    request: PatchGroupUsersIDRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchGroupUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    group_user_entity: Optional[shared.GroupUserEntity] = field(default=None)
    
