from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PepMonitorUpdatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PepMonitorUpdateRequestBody:
    webhook: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Webhook' }})
    

@dataclass
class PepMonitorUpdateSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepMonitorUpdateRequest:
    path_params: PepMonitorUpdatePathParams = field()
    security: PepMonitorUpdateSecurity = field()
    request: Optional[PepMonitorUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class PepMonitorUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    pep_monitor_update_200_application_json_any: Optional[Any] = field(default=None)
    pep_monitor_update_default_application_json_any: Optional[Any] = field(default=None)
    
