from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ChunkedUploadPathParams:
    upload_id: str = field(metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChunkedUploadHeaders:
    content_range: str = field(metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChunkedUploadSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChunkedUploadRequest:
    headers: ChunkedUploadHeaders = field()
    path_params: ChunkedUploadPathParams = field()
    security: ChunkedUploadSecurity = field()
    

@dataclass
class ChunkedUploadResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
