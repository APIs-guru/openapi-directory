from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyMonitorRegisterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorRegisterRequestBody:
    callback_url: str = field(metadata={'form': { 'field_name': 'callbackUrl' }})
    change_type: str = field(metadata={'form': { 'field_name': 'changeType' }})
    

@dataclass
class CompanyMonitorRegisterSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorRegisterRequest:
    path_params: CompanyMonitorRegisterPathParams = field()
    security: CompanyMonitorRegisterSecurity = field()
    request: Optional[CompanyMonitorRegisterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CompanyMonitorRegisterResponse:
    content_type: str = field()
    status_code: int = field()
    company_monitor_register_200_application_json_any: Optional[Any] = field(default=None)
    company_monitor_register_default_application_json_any: Optional[Any] = field(default=None)
    
