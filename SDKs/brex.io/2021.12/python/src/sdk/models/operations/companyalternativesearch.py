from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyAlternativeSearchPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    

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
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyAlternativeSearchRequest:
    path_params: CompanyAlternativeSearchPathParams = field(default=None)
    request: Optional[CompanyAlternativeSearchRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CompanyAlternativeSearchSecurity = field(default=None)
    

@dataclass
class CompanyAlternativeSearchResponse:
    company_alternative_search_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_alternative_search_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
