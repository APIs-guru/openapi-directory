from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostSiteTestWebhookRequestBody:
    url: str = field(metadata={'multipart_form': { 'field_name': 'url' }})
    action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    body: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'body', 'json': True }})
    encoding: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'encoding' }})
    headers: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'headers', 'json': True }})
    method: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'method' }})
    

@dataclass
class PostSiteTestWebhookRequest:
    request: PostSiteTestWebhookRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostSiteTestWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    status_entity: Optional[shared.StatusEntity] = field(default=None)
    
