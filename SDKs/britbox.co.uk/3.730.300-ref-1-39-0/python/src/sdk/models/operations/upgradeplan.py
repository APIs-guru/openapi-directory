from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpgradePlanPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpgradePlanQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpgradePlanSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpgradePlanRequest:
    path_params: UpgradePlanPathParams = field(default=None)
    query_params: UpgradePlanQueryParams = field(default=None)
    request: shared.ItvUpgradePlanRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpgradePlanSecurity = field(default=None)
    

@dataclass
class UpgradePlanResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
