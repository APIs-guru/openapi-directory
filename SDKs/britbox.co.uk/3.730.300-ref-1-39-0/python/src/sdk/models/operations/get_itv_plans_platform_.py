from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItvPlansPlatformPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItvPlansPlatformQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvPlansPlatformSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItvPlansPlatformRequest:
    path_params: GetItvPlansPlatformPathParams = field()
    query_params: GetItvPlansPlatformQueryParams = field()
    security: GetItvPlansPlatformSecurity = field()
    

@dataclass
class GetItvPlansPlatformResponse:
    content_type: str = field()
    status_code: int = field()
    itv_plans: Optional[shared.ItvPlans] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
