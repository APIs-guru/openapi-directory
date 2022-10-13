from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompanyMonitorRegisterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorRegisterRequestBody:
    callback_url: str = field(default=None, metadata={'form': { 'field_name': 'callbackUrl' }})
    change_type: str = field(default=None, metadata={'form': { 'field_name': 'changeType' }})
    

@dataclass
class CompanyMonitorRegisterSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorRegisterRequest:
    path_params: CompanyMonitorRegisterPathParams = field(default=None)
    request: Optional[CompanyMonitorRegisterRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CompanyMonitorRegisterSecurity = field(default=None)
    

@dataclass
class CompanyMonitorRegisterResponse:
    company_monitor_register_200_application_json_any: Optional[Any] = field(default=None)
    company_monitor_register_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
