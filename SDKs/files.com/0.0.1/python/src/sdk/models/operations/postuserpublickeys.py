from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserPublicKeysRequestBody:
    public_key: str = field(default=None, metadata={'multipart_form': { 'field_name': 'public_key' }})
    title: str = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostUserPublicKeysRequest:
    request: Optional[PostUserPublicKeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUserPublicKeysResponse:
    content_type: str = field(default=None)
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    status_code: int = field(default=None)
    
