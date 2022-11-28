from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class UploadResumableCancelQueryParams:
    upload_id: str = field(metadata={'query_param': { 'field_name': 'upload_id', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadResumableCancelHeaders:
    content_length: float = field(metadata={'header': { 'field_name': 'Content-Length', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadResumableCancelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableCancelRequest:
    headers: UploadResumableCancelHeaders = field()
    query_params: UploadResumableCancelQueryParams = field()
    security: UploadResumableCancelSecurity = field()
    

@dataclass
class UploadResumableCancelResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
