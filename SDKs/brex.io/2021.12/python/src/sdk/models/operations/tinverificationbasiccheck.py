from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TinVerificationBasicCheckQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    tin: str = field(metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclass
class TinVerificationBasicCheckSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TinVerificationBasicCheckRequest:
    query_params: TinVerificationBasicCheckQueryParams = field()
    security: TinVerificationBasicCheckSecurity = field()
    

@dataclass
class TinVerificationBasicCheckResponse:
    content_type: str = field()
    status_code: int = field()
    tin_verification_basic_check_200_application_json_any: Optional[Any] = field(default=None)
    tin_verification_basic_check_default_application_json_any: Optional[Any] = field(default=None)
    
