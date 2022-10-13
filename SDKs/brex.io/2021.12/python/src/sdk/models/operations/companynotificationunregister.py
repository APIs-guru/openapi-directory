from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompanyNotificationUnregisterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyNotificationUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationUnregisterRequest:
    path_params: CompanyNotificationUnregisterPathParams = field(default=None)
    security: CompanyNotificationUnregisterSecurity = field(default=None)
    

@dataclass
class CompanyNotificationUnregisterResponse:
    company_notification_unregister_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
