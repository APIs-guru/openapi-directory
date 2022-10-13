from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CompanyMonitorUnregisterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorUnregisterRequest:
    path_params: CompanyMonitorUnregisterPathParams = field(default=None)
    security: CompanyMonitorUnregisterSecurity = field(default=None)
    

@dataclass
class CompanyMonitorUnregisterResponse:
    company_monitor_unregister_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
