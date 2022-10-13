from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UploadBoundarySecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UploadBoundarySecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadBoundarySecurity:
    option1: Optional[UploadBoundarySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UploadBoundarySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UploadBoundaryRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UploadBoundarySecurity = field(default=None)
    

@dataclass
class UploadBoundaryResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    uploaded_boundary_id: Optional[Any] = field(default=None)
    
