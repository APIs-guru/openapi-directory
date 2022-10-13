from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UploadResumableQueryParams:
    upload_id: str = field(default=None, metadata={'query_param': { 'field_name': 'upload_id', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadResumableHeaders:
    content_length: float = field(default=None, metadata={'header': { 'field_name': 'Content-Length' }})
    content_range: str = field(default=None, metadata={'header': { 'field_name': 'Content-Range' }})
    

@dataclass
class UploadResumableSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableRequest:
    query_params: UploadResumableQueryParams = field(default=None)
    headers: UploadResumableHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    security: UploadResumableSecurity = field(default=None)
    

@dataclass
class UploadResumableResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    video_upload_response: Optional[Any] = field(default=None)
    
