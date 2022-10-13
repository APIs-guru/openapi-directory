from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetItvPlansPlatformPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetItvPlansPlatformQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetItvPlansPlatformSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetItvPlansPlatformRequest:
    path_params: GetItvPlansPlatformPathParams = field(default=None)
    query_params: GetItvPlansPlatformQueryParams = field(default=None)
    security: GetItvPlansPlatformSecurity = field(default=None)
    

@dataclass
class GetItvPlansPlatformResponse:
    content_type: str = field(default=None)
    itv_plans: Optional[shared.ItvPlans] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
