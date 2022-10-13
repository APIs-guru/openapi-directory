from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUserRequestsRequestBody:
    details: str = field(default=None, metadata={'multipart_form': { 'field_name': 'details' }})
    email: str = field(default=None, metadata={'multipart_form': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    

@dataclass
class PostUserRequestsRequest:
    request: PostUserRequestsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUserRequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_request_entity: Optional[shared.UserRequestEntity] = field(default=None)
    
