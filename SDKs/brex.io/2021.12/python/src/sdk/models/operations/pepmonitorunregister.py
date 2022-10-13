from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PepMonitorUnregisterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepMonitorUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepMonitorUnregisterRequest:
    path_params: PepMonitorUnregisterPathParams = field(default=None)
    security: PepMonitorUnregisterSecurity = field(default=None)
    

@dataclass
class PepMonitorUnregisterResponse:
    content_type: str = field(default=None)
    pep_monitor_unregister_200_application_json_any: Optional[Any] = field(default=None)
    pep_monitor_unregister_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
