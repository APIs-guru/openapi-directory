from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class EinVerificationLookupQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    tight: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'tight', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class EinVerificationLookupSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EinVerificationLookupRequest:
    query_params: EinVerificationLookupQueryParams = field(default=None)
    security: EinVerificationLookupSecurity = field(default=None)
    

@dataclass
class EinVerificationLookupResponse:
    content_type: str = field(default=None)
    ein_verification_lookup_200_application_json_any: Optional[Any] = field(default=None)
    ein_verification_lookup_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
