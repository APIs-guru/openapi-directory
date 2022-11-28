from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PepMonitorUnregisterPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepMonitorUnregisterSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepMonitorUnregisterRequest:
    path_params: PepMonitorUnregisterPathParams = field()
    security: PepMonitorUnregisterSecurity = field()
    

@dataclass
class PepMonitorUnregisterResponse:
    content_type: str = field()
    status_code: int = field()
    pep_monitor_unregister_200_application_json_any: Optional[Any] = field(default=None)
    pep_monitor_unregister_default_application_json_any: Optional[Any] = field(default=None)
    
