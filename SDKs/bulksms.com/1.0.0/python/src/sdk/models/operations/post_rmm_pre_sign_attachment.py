from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRmmPreSignAttachmentSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRmmPreSignAttachmentRequest:
    request: shared.PreSignRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostRmmPreSignAttachmentSecurity = field()
    

@dataclass
class PostRmmPreSignAttachmentResponse:
    content_type: str = field()
    status_code: int = field()
    pre_sign_info: Optional[shared.PreSignInfo] = field(default=None)
    
