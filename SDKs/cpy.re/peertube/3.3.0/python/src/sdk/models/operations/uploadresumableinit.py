from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UploadResumableInitHeaders:
    x_upload_content_length: float = field(metadata={'header': { 'field_name': 'X-Upload-Content-Length', 'style': 'simple', 'explode': False }})
    x_upload_content_type: str = field(metadata={'header': { 'field_name': 'X-Upload-Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadResumableInitSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableInitRequest:
    headers: UploadResumableInitHeaders = field()
    security: UploadResumableInitSecurity = field()
    request: Optional[shared.VideoUploadRequestResumable] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UploadResumableInitResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
