from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostUploadHeaders:
    x_recipient_email: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Recipient-Email' }})
    

@dataclass
class PostUploadSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostUploadSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostUploadSecurity:
    option1: Optional[PostUploadSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostUploadSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostUploadRequest:
    headers: PostUploadHeaders = field(default=None)
    request: Optional[shared.Upload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUploadSecurity = field(default=None)
    

@dataclass
class PostUploadResponse:
    content_type: str = field(default=None)
    created_upload: Optional[str] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
