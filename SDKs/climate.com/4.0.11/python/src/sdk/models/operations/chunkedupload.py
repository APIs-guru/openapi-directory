from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ChunkedUploadPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChunkedUploadHeaders:
    content_range: str = field(default=None, metadata={'header': { 'field_name': 'Content-Range' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass
class ChunkedUploadSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ChunkedUploadSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChunkedUploadSecurity:
    option1: Optional[ChunkedUploadSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ChunkedUploadSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ChunkedUploadRequest:
    path_params: ChunkedUploadPathParams = field(default=None)
    headers: ChunkedUploadHeaders = field(default=None)
    security: ChunkedUploadSecurity = field(default=None)
    

@dataclass
class ChunkedUploadResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
