from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyAlternativeSearchPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyAlternativeSearchRequestBody:
    address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'address' }})
    name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'number' }})
    phone: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'phone' }})
    url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'url' }})
    vat: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'vat' }})
    

@dataclass
class CompanyAlternativeSearchSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyAlternativeSearchRequest:
    path_params: CompanyAlternativeSearchPathParams = field()
    security: CompanyAlternativeSearchSecurity = field()
    request: Optional[CompanyAlternativeSearchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CompanyAlternativeSearchResponse:
    content_type: str = field()
    status_code: int = field()
    company_alternative_search_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_alternative_search_default_application_json_any: Optional[Any] = field(default=None)
    
