from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGroupUsersRequestBody:
    group_id: int = field(metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = field(metadata={'multipart_form': { 'field_name': 'user_id' }})
    admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclass
class PostGroupUsersRequest:
    request: PostGroupUsersRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostGroupUsersResponse:
    content_type: str = field()
    status_code: int = field()
    group_user_entity: Optional[shared.GroupUserEntity] = field(default=None)
    
