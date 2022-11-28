from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyDeepsearchLeiPathParams:
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchLeiQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyDeepsearchLeiSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchLeiRequest:
    path_params: CompanyDeepsearchLeiPathParams = field()
    query_params: CompanyDeepsearchLeiQueryParams = field()
    security: CompanyDeepsearchLeiSecurity = field()
    

@dataclass
class CompanyDeepsearchLeiResponse:
    content_type: str = field()
    status_code: int = field()
    company_deepsearch_lei_200_application_json_any: Optional[Any] = field(default=None)
    company_deepsearch_lei_default_application_json_any: Optional[Any] = field(default=None)
    
