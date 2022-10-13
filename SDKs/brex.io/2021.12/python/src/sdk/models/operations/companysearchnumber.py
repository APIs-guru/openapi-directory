from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanySearchNumberPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanySearchNumberQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanySearchNumberSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanySearchNumberRequest:
    path_params: CompanySearchNumberPathParams = field(default=None)
    query_params: CompanySearchNumberQueryParams = field(default=None)
    security: CompanySearchNumberSecurity = field(default=None)
    

@dataclass
class CompanySearchNumberResponse:
    company_search_number_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_search_number_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
