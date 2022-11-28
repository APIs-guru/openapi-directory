from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserRequestsRequestBody:
    details: str = field(metadata={'multipart_form': { 'field_name': 'details' }})
    email: str = field(metadata={'multipart_form': { 'field_name': 'email' }})
    name: str = field(metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class PostUserRequestsRequest:
    request: PostUserRequestsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUserRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    user_request_entity: Optional[shared.UserRequestEntity] = field(default=None)
    
