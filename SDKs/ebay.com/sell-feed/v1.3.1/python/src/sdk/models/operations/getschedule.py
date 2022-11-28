from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchedulePathParams:
    schedule_id: str = field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScheduleRequest:
    path_params: GetSchedulePathParams = field()
    security: GetScheduleSecurity = field()
    

@dataclass
class GetScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    user_schedule_response: Optional[shared.UserScheduleResponse] = field(default=None)
    
