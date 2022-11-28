from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyDeepsearchNumberPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchNumberSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchNumberRequest:
    path_params: CompanyDeepsearchNumberPathParams = field()
    security: CompanyDeepsearchNumberSecurity = field()
    

@dataclass
class CompanyDeepsearchNumberResponse:
    content_type: str = field()
    status_code: int = field()
    company_deepsearch_number_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_number_default_application_json_any: Optional[Any] = field(default=None)
    
