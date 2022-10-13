from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FetchUploadStatusByIDPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'uploadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUploadStatusByIDSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchUploadStatusByIDSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchUploadStatusByIDSecurity:
    option1: Optional[FetchUploadStatusByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchUploadStatusByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchUploadStatusByIDRequest:
    path_params: FetchUploadStatusByIDPathParams = field(default=None)
    security: FetchUploadStatusByIDSecurity = field(default=None)
    

@dataclass
class FetchUploadStatusByIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    upload_status: Optional[shared.UploadStatus] = field(default=None)
    
