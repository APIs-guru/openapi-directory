from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostUploadHeaders:
    x_recipient_email: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Recipient-Email', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUploadSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUploadRequest:
    headers: PostUploadHeaders = field()
    security: PostUploadSecurity = field()
    request: Optional[shared.Upload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUploadResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    created_upload: Optional[str] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
