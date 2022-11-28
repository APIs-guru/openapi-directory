from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKycSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetKycRequest:
    security: GetKycSecurity = field()
    

@dataclass
class GetKycResponse:
    content_type: str = field()
    status_code: int = field()
    kyc_response: Optional[shared.KycResponse] = field(default=None)
    
