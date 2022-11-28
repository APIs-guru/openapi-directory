from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FetchUploadStatusByIDPathParams:
    upload_id: str = field(metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUploadStatusByIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchUploadStatusByIDRequest:
    path_params: FetchUploadStatusByIDPathParams = field()
    security: FetchUploadStatusByIDSecurity = field()
    

@dataclass
class FetchUploadStatusByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    upload_status: Optional[shared.UploadStatus] = field(default=None)
    
