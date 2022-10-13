from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGroupUsersRequestBody:
    admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    group_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostGroupUsersRequest:
    request: PostGroupUsersRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostGroupUsersResponse:
    content_type: str = field(default=None)
    group_user_entity: Optional[shared.GroupUserEntity] = field(default=None)
    status_code: int = field(default=None)
    
