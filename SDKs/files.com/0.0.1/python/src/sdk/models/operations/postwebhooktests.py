from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostWebhookTestsRequestBody:
    action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    body: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'body', 'json': True }})
    encoding: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'encoding' }})
    file_as_body: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'file_as_body' }})
    file_form_field: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'file_form_field' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'headers', 'json': True }})
    method: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    raw_body: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'raw_body' }})
    url: str = field(default=None, metadata={'multipart_form': { 'field_name': 'url' }})
    

@dataclass
class PostWebhookTestsRequest:
    request: PostWebhookTestsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostWebhookTestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_test_entity: Optional[shared.WebhookTestEntity] = field(default=None)
    
