from dataclasses import dataclass, field
from typing import List


@dataclass
class UploadResumableCancelQueryParams:
    upload_id: str = field(default=None, metadata={'query_param': { 'field_name': 'upload_id', 'style': 'form', 'explode': True }})
    

@dataclass
class UploadResumableCancelHeaders:
    content_length: float = field(default=None, metadata={'header': { 'field_name': 'Content-Length' }})
    

@dataclass
class UploadResumableCancelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadResumableCancelRequest:
    query_params: UploadResumableCancelQueryParams = field(default=None)
    headers: UploadResumableCancelHeaders = field(default=None)
    security: UploadResumableCancelSecurity = field(default=None)
    

@dataclass
class UploadResumableCancelResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
