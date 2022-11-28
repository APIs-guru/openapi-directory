from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyDeepsearchNamePathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchNameSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchNameRequest:
    path_params: CompanyDeepsearchNamePathParams = field()
    security: CompanyDeepsearchNameSecurity = field()
    

@dataclass
class CompanyDeepsearchNameResponse:
    content_type: str = field()
    status_code: int = field()
    company_deepsearch_name_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_name_default_application_json_any: Optional[Any] = field(default=None)
    
