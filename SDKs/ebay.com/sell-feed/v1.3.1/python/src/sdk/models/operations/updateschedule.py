from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateSchedulePathParams:
    schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateScheduleRequest:
    path_params: UpdateSchedulePathParams = field(default=None)
    request: shared.UpdateUserScheduleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScheduleSecurity = field(default=None)
    

@dataclass
class UpdateScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
