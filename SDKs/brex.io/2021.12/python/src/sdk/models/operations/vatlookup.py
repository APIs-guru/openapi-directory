from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class VatLookupPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatLookupRequestBody:
    address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'address' }})
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    

@dataclass
class VatLookupSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatLookupRequest:
    path_params: VatLookupPathParams = field(default=None)
    request: VatLookupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatLookupSecurity = field(default=None)
    

@dataclass
class VatLookupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vat_lookup_200_application_json_any: Optional[Any] = field(default=None)
    vat_lookup_default_application_json_any: Optional[Any] = field(default=None)
    
