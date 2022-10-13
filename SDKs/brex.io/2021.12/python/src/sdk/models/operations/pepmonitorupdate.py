from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PepMonitorUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepMonitorUpdateRequestBody:
    webhook: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhook' }})
    

@dataclass
class PepMonitorUpdateSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepMonitorUpdateRequest:
    path_params: PepMonitorUpdatePathParams = field(default=None)
    request: Optional[PepMonitorUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PepMonitorUpdateSecurity = field(default=None)
    

@dataclass
class PepMonitorUpdateResponse:
    content_type: str = field(default=None)
    pep_monitor_update_200_application_json_any: Optional[Any] = field(default=None)
    pep_monitor_update_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
