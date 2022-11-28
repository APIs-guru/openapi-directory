from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostUploadQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PostUploadHeaders:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUploadRequest:
    headers: PostUploadHeaders = field()
    query_params: PostUploadQueryParams = field()
    request: Optional[shared.TokenUploadPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostUploadResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
