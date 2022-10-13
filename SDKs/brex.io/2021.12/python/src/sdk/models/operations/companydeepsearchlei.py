from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompanyDeepsearchLeiPathParams:
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchLeiQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyDeepsearchLeiSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchLeiRequest:
    path_params: CompanyDeepsearchLeiPathParams = field(default=None)
    query_params: CompanyDeepsearchLeiQueryParams = field(default=None)
    security: CompanyDeepsearchLeiSecurity = field(default=None)
    

@dataclass
class CompanyDeepsearchLeiResponse:
    company_deepsearch_lei_200_application_json_any: Optional[Any] = field(default=None)
    company_deepsearch_lei_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
