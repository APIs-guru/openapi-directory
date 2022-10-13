from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostBehaviorsRequestBodyAttachmentFile:
    attachment_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'attachment_file' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class PostBehaviorsRequestBody:
    attachment_file: Optional[PostBehaviorsRequestBodyAttachmentFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    behavior: str = field(default=None, metadata={'multipart_form': { 'field_name': 'behavior' }})
    path: str = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    value: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'value' }})
    

@dataclass
class PostBehaviorsRequest:
    request: Optional[PostBehaviorsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostBehaviorsResponse:
    behavior_entity: Optional[shared.BehaviorEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
