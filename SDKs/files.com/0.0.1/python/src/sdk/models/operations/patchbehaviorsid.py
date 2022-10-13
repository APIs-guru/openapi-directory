from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchBehaviorsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchBehaviorsIDRequestBodyAttachmentFile:
    attachment_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'attachment_file' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class PatchBehaviorsIDRequestBody:
    attachment_file: Optional[PatchBehaviorsIDRequestBodyAttachmentFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    behavior: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'behavior' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    value: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'value' }})
    

@dataclass
class PatchBehaviorsIDRequest:
    path_params: PatchBehaviorsIDPathParams = field(default=None)
    request: Optional[PatchBehaviorsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchBehaviorsIDResponse:
    behavior_entity: Optional[shared.BehaviorEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
