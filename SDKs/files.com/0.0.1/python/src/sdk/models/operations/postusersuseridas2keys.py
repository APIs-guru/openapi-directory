from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDAs2KeysPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDAs2KeysRequestBody:
    as2_partnership_name: str = field(default=None, metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    public_key: str = field(default=None, metadata={'multipart_form': { 'field_name': 'public_key' }})
    

@dataclass
class PostUsersUserIDAs2KeysRequest:
    path_params: PostUsersUserIDAs2KeysPathParams = field(default=None)
    request: PostUsersUserIDAs2KeysRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUsersUserIDAs2KeysResponse:
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
