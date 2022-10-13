from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyDeepsearchNamePathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyDeepsearchNameSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchNameRequest:
    path_params: CompanyDeepsearchNamePathParams = field(default=None)
    security: CompanyDeepsearchNameSecurity = field(default=None)
    

@dataclass
class CompanyDeepsearchNameResponse:
    company_deepsearch_name_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_name_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
