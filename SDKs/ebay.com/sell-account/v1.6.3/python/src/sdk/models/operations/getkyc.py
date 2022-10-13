from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKycSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetKycRequest:
    security: GetKycSecurity = field(default=None)
    

@dataclass
class GetKycResponse:
    content_type: str = field(default=None)
    kyc_response: Optional[shared.KycResponse] = field(default=None)
    status_code: int = field(default=None)
    
