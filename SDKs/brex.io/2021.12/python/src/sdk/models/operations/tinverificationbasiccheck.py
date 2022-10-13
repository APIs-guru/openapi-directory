from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TinVerificationBasicCheckQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    tin: str = field(default=None, metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclass
class TinVerificationBasicCheckSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TinVerificationBasicCheckRequest:
    query_params: TinVerificationBasicCheckQueryParams = field(default=None)
    security: TinVerificationBasicCheckSecurity = field(default=None)
    

@dataclass
class TinVerificationBasicCheckResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tin_verification_basic_check_200_application_json_any: Optional[Any] = field(default=None)
    tin_verification_basic_check_default_application_json_any: Optional[Any] = field(default=None)
    
