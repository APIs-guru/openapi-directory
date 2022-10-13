from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchedulePathParams:
    schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScheduleRequest:
    path_params: GetSchedulePathParams = field(default=None)
    security: GetScheduleSecurity = field(default=None)
    

@dataclass
class GetScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_schedule_response: Optional[shared.UserScheduleResponse] = field(default=None)
    
