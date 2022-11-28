from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanySearchNamePathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanySearchNameQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanySearchNameSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanySearchNameRequest:
    path_params: CompanySearchNamePathParams = field()
    query_params: CompanySearchNameQueryParams = field()
    security: CompanySearchNameSecurity = field()
    

@dataclass
class CompanySearchNameResponse:
    content_type: str = field()
    status_code: int = field()
    company_search_name_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_search_name_default_application_json_any: Optional[Any] = field(default=None)
    
