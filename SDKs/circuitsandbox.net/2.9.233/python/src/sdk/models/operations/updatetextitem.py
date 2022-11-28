from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateTextItemPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTextItemRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    

@dataclass
class UpdateTextItemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTextItemRequest:
    path_params: UpdateTextItemPathParams = field()
    security: UpdateTextItemSecurity = field()
    request: Optional[UpdateTextItemRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateTextItemResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    
