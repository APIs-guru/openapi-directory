from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddTextItemWithParentPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTextItemWithParentRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    

@dataclass
class AddTextItemWithParentSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddTextItemWithParentRequest:
    path_params: AddTextItemWithParentPathParams = field(default=None)
    request: Optional[AddTextItemWithParentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddTextItemWithParentSecurity = field(default=None)
    

@dataclass
class AddTextItemWithParentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
