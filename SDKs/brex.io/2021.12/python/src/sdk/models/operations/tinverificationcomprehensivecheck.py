from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TinVerificationComprehensiveCheckQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    tin: str = field(metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    threshold: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    

@dataclass
class TinVerificationComprehensiveCheckSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TinVerificationComprehensiveCheckRequest:
    query_params: TinVerificationComprehensiveCheckQueryParams = field()
    security: TinVerificationComprehensiveCheckSecurity = field()
    

@dataclass
class TinVerificationComprehensiveCheckResponse:
    content_type: str = field()
    status_code: int = field()
    tin_verification_comprehensive_check_200_application_json_any: Optional[Any] = field(default=None)
    tin_verification_comprehensive_check_default_application_json_any: Optional[Any] = field(default=None)
    
