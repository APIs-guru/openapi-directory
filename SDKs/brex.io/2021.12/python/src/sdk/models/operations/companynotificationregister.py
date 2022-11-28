from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyNotificationRegisterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyNotificationRegisterRequestBody:
    callback_url: str = field(metadata={'form': { 'field_name': 'callbackUrl' }})
    

@dataclass
class CompanyNotificationRegisterSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyNotificationRegisterRequest:
    path_params: CompanyNotificationRegisterPathParams = field()
    security: CompanyNotificationRegisterSecurity = field()
    request: Optional[CompanyNotificationRegisterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CompanyNotificationRegisterResponse:
    content_type: str = field()
    status_code: int = field()
    company_notification_register_200_application_json_any: Optional[Any] = field(default=None)
    company_notification_register_default_application_json_any: Optional[Any] = field(default=None)
    
