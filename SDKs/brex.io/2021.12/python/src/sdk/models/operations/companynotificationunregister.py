from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyNotificationUnregisterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyNotificationUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationUnregisterRequest:
    path_params: CompanyNotificationUnregisterPathParams = field()
    security: CompanyNotificationUnregisterSecurity = field()
    

@dataclass
class CompanyNotificationUnregisterResponse:
    content_type: str = field()
    status_code: int = field()
    company_notification_unregister_default_application_json_any: Optional[Any] = field(default=None)
    
