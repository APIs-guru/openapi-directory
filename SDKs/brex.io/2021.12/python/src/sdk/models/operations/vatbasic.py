from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class VatBasicPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatBasicRequestBody:
    vat_number: str = field(metadata={'form': { 'field_name': 'vatNumber' }})
    company_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    company_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyNumber' }})
    

@dataclass
class VatBasicSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatBasicRequest:
    path_params: VatBasicPathParams = field()
    request: VatBasicRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatBasicSecurity = field()
    

@dataclass
class VatBasicResponse:
    content_type: str = field()
    status_code: int = field()
    vat_basic_200_application_json_any: Optional[Any] = field(default=None)
    vat_basic_default_application_json_any: Optional[Any] = field(default=None)
    
