from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class VatBasicPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class VatBasicRequestBody:
    company_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyAddress' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyName' }})
    company_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'companyNumber' }})
    vat_number: str = field(default=None, metadata={'form': { 'field_name': 'vatNumber' }})
    

@dataclass
class VatBasicSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class VatBasicRequest:
    path_params: VatBasicPathParams = field(default=None)
    request: VatBasicRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: VatBasicSecurity = field(default=None)
    

@dataclass
class VatBasicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vat_basic_200_application_json_any: Optional[Any] = field(default=None)
    vat_basic_default_application_json_any: Optional[Any] = field(default=None)
    
