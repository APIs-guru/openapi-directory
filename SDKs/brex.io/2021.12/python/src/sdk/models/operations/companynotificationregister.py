from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompanyNotificationRegisterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyNotificationRegisterRequestBody:
    callback_url: str = field(default=None, metadata={'form': { 'field_name': 'callbackUrl' }})
    

@dataclass
class CompanyNotificationRegisterSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationRegisterRequest:
    path_params: CompanyNotificationRegisterPathParams = field(default=None)
    request: Optional[CompanyNotificationRegisterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CompanyNotificationRegisterSecurity = field(default=None)
    

@dataclass
class CompanyNotificationRegisterResponse:
    company_notification_register_200_application_json_any: Optional[Any] = field(default=None)
    company_notification_register_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
