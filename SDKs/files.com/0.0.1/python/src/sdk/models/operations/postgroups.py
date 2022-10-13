from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostGroupsRequestBody:
    admin_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin_ids' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'notes' }})
    user_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclass
class PostGroupsRequest:
    request: Optional[PostGroupsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostGroupsResponse:
    content_type: str = field(default=None)
    group_entity: Optional[shared.GroupEntity] = field(default=None)
    status_code: int = field(default=None)
    
