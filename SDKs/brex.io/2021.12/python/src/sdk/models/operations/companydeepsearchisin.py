from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyDeepsearchIsinRequestBody:
    isin: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'isin' }})
    

@dataclass
class CompanyDeepsearchIsinSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchIsinRequest:
    request: Optional[CompanyDeepsearchIsinRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CompanyDeepsearchIsinSecurity = field(default=None)
    

@dataclass
class CompanyDeepsearchIsinResponse:
    company_deepsearch_isin_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_isin_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
