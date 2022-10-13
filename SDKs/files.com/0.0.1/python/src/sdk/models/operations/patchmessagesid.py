from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchMessagesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchMessagesIDRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    project_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'project_id' }})
    subject: str = field(default=None, metadata={'multipart_form': { 'field_name': 'subject' }})
    

@dataclass
class PatchMessagesIDRequest:
    path_params: PatchMessagesIDPathParams = field(default=None)
    request: PatchMessagesIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchMessagesIDResponse:
    content_type: str = field(default=None)
    message_entity: Optional[shared.MessageEntity] = field(default=None)
    status_code: int = field(default=None)
    
