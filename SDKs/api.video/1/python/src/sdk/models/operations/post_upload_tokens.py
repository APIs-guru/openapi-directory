from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUploadTokensSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostUploadTokensRequest:
    security: PostUploadTokensSecurity = field()
    request: Optional[shared.TokenCreatePayload] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUploadTokensResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    upload_token: Optional[shared.UploadToken] = field(default=None)
    
