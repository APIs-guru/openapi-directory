from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostInboxRecipientsRequestBody:
    company: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    inbox_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    recipient: str = field(default=None, metadata={'multipart_form': { 'field_name': 'recipient' }})
    share_after_create: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'share_after_create' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostInboxRecipientsRequest:
    request: Optional[PostInboxRecipientsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostInboxRecipientsResponse:
    content_type: str = field(default=None)
    inbox_recipient_entity: Optional[shared.InboxRecipientEntity] = field(default=None)
    status_code: int = field(default=None)
    
