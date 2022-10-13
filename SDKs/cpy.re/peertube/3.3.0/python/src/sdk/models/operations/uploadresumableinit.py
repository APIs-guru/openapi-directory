from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UploadResumableInitHeaders:
    x_upload_content_length: float = field(default=None, metadata={'header': { 'field_name': 'X-Upload-Content-Length' }})
    x_upload_content_type: str = field(default=None, metadata={'header': { 'field_name': 'X-Upload-Content-Type' }})
    

@dataclass
class UploadResumableInitSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableInitRequest:
    headers: UploadResumableInitHeaders = field(default=None)
    request: Optional[shared.VideoUploadRequestResumable] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UploadResumableInitSecurity = field(default=None)
    

@dataclass
class UploadResumableInitResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
