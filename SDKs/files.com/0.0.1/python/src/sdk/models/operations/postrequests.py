from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRequestsRequestBody:
    destination: str = field(default=None, metadata={'multipart_form': { 'field_name': 'destination' }})
    group_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    path: str = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    user_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclass
class PostRequestsRequest:
    request: PostRequestsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostRequestsResponse:
    content_type: str = field(default=None)
    request_entity: Optional[shared.RequestEntity] = field(default=None)
    status_code: int = field(default=None)
    
