from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostBundleRecipientsRequestBody:
    bundle_id: int = field(metadata={'multipart_form': { 'field_name': 'bundle_id' }})
    recipient: str = field(metadata={'multipart_form': { 'field_name': 'recipient' }})
    company: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    share_after_create: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'share_after_create' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostBundleRecipientsRequest:
    request: Optional[PostBundleRecipientsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostBundleRecipientsResponse:
    content_type: str = field()
    status_code: int = field()
    bundle_recipient_entity: Optional[shared.BundleRecipientEntity] = field(default=None)
    
