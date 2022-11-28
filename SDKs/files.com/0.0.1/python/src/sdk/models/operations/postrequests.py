from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRequestsRequestBody:
    destination: str = field(metadata={'multipart_form': { 'field_name': 'destination' }})
    path: str = field(metadata={'multipart_form': { 'field_name': 'path' }})
    group_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    user_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclass
class PostRequestsRequest:
    request: PostRequestsRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    request_entity: Optional[shared.RequestEntity] = field(default=None)
    
