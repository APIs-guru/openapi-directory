from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TinVerificationComprehensiveCheckQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    threshold: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    tin: str = field(default=None, metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclass
class TinVerificationComprehensiveCheckSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TinVerificationComprehensiveCheckRequest:
    query_params: TinVerificationComprehensiveCheckQueryParams = field(default=None)
    security: TinVerificationComprehensiveCheckSecurity = field(default=None)
    

@dataclass
class TinVerificationComprehensiveCheckResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tin_verification_comprehensive_check_200_application_json_any: Optional[Any] = field(default=None)
    tin_verification_comprehensive_check_default_application_json_any: Optional[Any] = field(default=None)
    
