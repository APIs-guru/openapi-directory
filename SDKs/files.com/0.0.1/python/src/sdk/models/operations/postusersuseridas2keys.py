from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUsersUserIDAs2KeysPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersUserIDAs2KeysRequestBody:
    as2_partnership_name: str = field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    public_key: str = field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    

@dataclass
class PostUsersUserIDAs2KeysRequest:
    path_params: PostUsersUserIDAs2KeysPathParams = field()
    request: PostUsersUserIDAs2KeysRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUsersUserIDAs2KeysResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    
