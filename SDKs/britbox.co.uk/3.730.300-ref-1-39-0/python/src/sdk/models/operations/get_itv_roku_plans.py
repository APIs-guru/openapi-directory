from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItvRokuPlansQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvRokuPlansRequest:
    query_params: GetItvRokuPlansQueryParams = field(default=None)
    

@dataclass
class GetItvRokuPlansResponse:
    content_type: str = field(default=None)
    roku_plans: Optional[shared.RokuPlans] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
