from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UploadResumableQueryParams:
    upload_id: str = field(metadata={'query_param': { 'field_name': 'upload_id', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadResumableHeaders:
    content_length: float = field(metadata={'header': { 'field_name': 'Content-Length', 'style': 'simple', 'explode': False }})
    content_range: str = field(metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadResumableSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableRequest:
    headers: UploadResumableHeaders = field()
    query_params: UploadResumableQueryParams = field()
    security: UploadResumableSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class UploadResumableResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    video_upload_response: Optional[Any] = field(default=None)
    
