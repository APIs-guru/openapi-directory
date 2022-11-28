from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TinVerificationNameLookupQueryParams:
    tin: str = field(metadata={'query_param': { 'field_name': 'tin', 'style': 'form', 'explode': True }})
    

@dataclass
class TinVerificationNameLookupSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TinVerificationNameLookupRequest:
    query_params: TinVerificationNameLookupQueryParams = field()
    security: TinVerificationNameLookupSecurity = field()
    

@dataclass
class TinVerificationNameLookupResponse:
    content_type: str = field()
    status_code: int = field()
    tin_verification_name_lookup_200_application_json_any: Optional[Any] = field(default=None)
    tin_verification_name_lookup_default_application_json_any: Optional[Any] = field(default=None)
    
