from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EinVerificationComprehensiveQueryParams:
    ein: str = field(metadata={'query_param': { 'field_name': 'ein', 'style': 'form', 'explode': True }})
    

@dataclass
class EinVerificationComprehensiveSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EinVerificationComprehensiveRequest:
    query_params: EinVerificationComprehensiveQueryParams = field()
    security: EinVerificationComprehensiveSecurity = field()
    

@dataclass
class EinVerificationComprehensiveResponse:
    content_type: str = field()
    status_code: int = field()
    ein_verification_comprehensive_200_application_json_any: Optional[Any] = field(default=None)
    ein_verification_comprehensive_default_application_json_any: Optional[Any] = field(default=None)
    
