from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUploadTokensSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostUploadTokensRequest:
    request: Optional[shared.TokenCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostUploadTokensSecurity = field(default=None)
    

@dataclass
class PostUploadTokensResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    upload_token: Optional[shared.UploadToken] = field(default=None)
    
