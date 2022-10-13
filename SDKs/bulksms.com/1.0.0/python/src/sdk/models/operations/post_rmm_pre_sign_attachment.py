from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRmmPreSignAttachmentSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRmmPreSignAttachmentRequest:
    request: shared.PreSignRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRmmPreSignAttachmentSecurity = field(default=None)
    

@dataclass
class PostRmmPreSignAttachmentResponse:
    content_type: str = field(default=None)
    pre_sign_info: Optional[shared.PreSignInfo] = field(default=None)
    status_code: int = field(default=None)
    
