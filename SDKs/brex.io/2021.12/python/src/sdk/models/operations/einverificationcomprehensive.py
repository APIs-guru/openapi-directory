from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class EinVerificationComprehensiveQueryParams:
    ein: str = field(default=None, metadata={'query_param': { 'field_name': 'ein', 'style': 'form', 'explode': True }})
    

@dataclass
class EinVerificationComprehensiveSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EinVerificationComprehensiveRequest:
    query_params: EinVerificationComprehensiveQueryParams = field(default=None)
    security: EinVerificationComprehensiveSecurity = field(default=None)
    

@dataclass
class EinVerificationComprehensiveResponse:
    content_type: str = field(default=None)
    ein_verification_comprehensive_200_application_json_any: Optional[Any] = field(default=None)
    ein_verification_comprehensive_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
