from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FetchUploadStatusesSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchUploadStatusesRequest:
    security: FetchUploadStatusesSecurity = field()
    request: Optional[shared.UploadStatusQuery] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FetchUploadStatusesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    upload_statuses: Optional[shared.UploadStatuses] = field(default=None)
    
