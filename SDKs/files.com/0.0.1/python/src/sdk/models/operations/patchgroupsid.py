from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGroupsIDRequestBody:
    admin_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'admin_ids' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'notes' }})
    user_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclass
class PatchGroupsIDRequest:
    path_params: PatchGroupsIDPathParams = field(default=None)
    request: Optional[PatchGroupsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchGroupsIDResponse:
    content_type: str = field(default=None)
    group_entity: Optional[shared.GroupEntity] = field(default=None)
    status_code: int = field(default=None)
    
