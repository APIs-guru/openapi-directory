from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddSslCertificateRequestRequest:
    request: Optional[shared.CreateSslCertificateRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddSslCertificateRequestResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
