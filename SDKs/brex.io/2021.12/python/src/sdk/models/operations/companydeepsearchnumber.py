from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyDeepsearchNumberPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchNumberSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchNumberRequest:
    path_params: CompanyDeepsearchNumberPathParams = field(default=None)
    security: CompanyDeepsearchNumberSecurity = field(default=None)
    

@dataclass
class CompanyDeepsearchNumberResponse:
    company_deepsearch_number_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_number_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
