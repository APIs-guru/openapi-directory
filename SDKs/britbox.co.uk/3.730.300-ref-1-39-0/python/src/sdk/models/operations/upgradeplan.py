from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpgradePlanPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpgradePlanQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpgradePlanSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpgradePlanRequest:
    path_params: UpgradePlanPathParams = field()
    query_params: UpgradePlanQueryParams = field()
    request: shared.ItvUpgradePlanRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpgradePlanSecurity = field()
    

@dataclass
class UpgradePlanResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
