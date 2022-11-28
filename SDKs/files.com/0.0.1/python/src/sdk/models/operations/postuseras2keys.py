from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserAs2KeysRequestBody:
    as2_partnership_name: str = field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    public_key: str = field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostUserAs2KeysRequest:
    request: Optional[PostUserAs2KeysRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUserAs2KeysResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    
