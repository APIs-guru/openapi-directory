from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyMonitorUnregisterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorUnregisterRequest:
    path_params: CompanyMonitorUnregisterPathParams = field()
    security: CompanyMonitorUnregisterSecurity = field()
    

@dataclass
class CompanyMonitorUnregisterResponse:
    content_type: str = field()
    status_code: int = field()
    company_monitor_unregister_default_application_json_any: Optional[Any] = field(default=None)
    
