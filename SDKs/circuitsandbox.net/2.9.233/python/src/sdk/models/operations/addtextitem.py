from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class AddTextItemPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTextItemRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    

@dataclass
class AddTextItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddTextItemRequest:
    path_params: AddTextItemPathParams = field(default=None)
    request: Optional[AddTextItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: AddTextItemSecurity = field(default=None)
    

@dataclass
class AddTextItemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
