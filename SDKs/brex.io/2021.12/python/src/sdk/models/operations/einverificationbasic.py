from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EinVerificationBasicQueryParams:
    ein: str = field(metadata={'query_param': { 'field_name': 'ein', 'style': 'form', 'explode': True }})
    

@dataclass
class EinVerificationBasicSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EinVerificationBasicRequest:
    query_params: EinVerificationBasicQueryParams = field()
    security: EinVerificationBasicSecurity = field()
    

@dataclass
class EinVerificationBasicResponse:
    content_type: str = field()
    status_code: int = field()
    ein_verification_basic_200_application_json_any: Optional[Any] = field(default=None)
    ein_verification_basic_default_application_json_any: Optional[Any] = field(default=None)
    
