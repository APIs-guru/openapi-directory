from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class AddTextItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTextItemRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    

@dataclass
class AddTextItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddTextItemRequest:
    path_params: AddTextItemPathParams = field()
    security: AddTextItemSecurity = field()
    request: Optional[AddTextItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class AddTextItemResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    
