from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDPublicKeysPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDPublicKeysRequestBody:
    public_key: str = field(default=None, metadata={'multipart_form': { 'field_name': 'public_key' }})
    title: str = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class PostUsersUserIDPublicKeysRequest:
    path_params: PostUsersUserIDPublicKeysPathParams = field(default=None)
    request: PostUsersUserIDPublicKeysRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUsersUserIDPublicKeysResponse:
    content_type: str = field(default=None)
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    status_code: int = field(default=None)
    
