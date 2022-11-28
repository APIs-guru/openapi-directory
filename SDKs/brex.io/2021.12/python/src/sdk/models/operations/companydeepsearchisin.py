from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyDeepsearchIsinRequestBody:
    isin: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'isin' }})
    

@dataclass
class CompanyDeepsearchIsinSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyDeepsearchIsinRequest:
    security: CompanyDeepsearchIsinSecurity = field()
    request: Optional[CompanyDeepsearchIsinRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CompanyDeepsearchIsinResponse:
    content_type: str = field()
    status_code: int = field()
    company_deepsearch_isin_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_deepsearch_isin_default_application_json_any: Optional[Any] = field(default=None)
    
