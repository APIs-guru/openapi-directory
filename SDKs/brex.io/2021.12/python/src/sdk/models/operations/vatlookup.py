from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class VatLookupPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatLookupRequestBody:
    name: str = field(metadata={'form': { 'field_name': 'name' }})
    address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'address' }})
    

@dataclass
class VatLookupSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatLookupRequest:
    path_params: VatLookupPathParams = field()
    request: VatLookupRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLookupSecurity = field()
    

@dataclass
class VatLookupResponse:
    content_type: str = field()
    status_code: int = field()
    vat_lookup_200_application_json_any: Optional[Any] = field(default=None)
    vat_lookup_default_application_json_any: Optional[Any] = field(default=None)
    
