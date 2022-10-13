from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEePlansQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEePlansRequest:
    query_params: GetEePlansQueryParams = field(default=None)
    

@dataclass
class GetEePlansResponse:
    content_type: str = field(default=None)
    ee_plans: Optional[shared.EePlans] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
