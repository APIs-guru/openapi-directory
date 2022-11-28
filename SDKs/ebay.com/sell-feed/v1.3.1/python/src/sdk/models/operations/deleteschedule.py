from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteSchedulePathParams:
    schedule_id: str = field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteScheduleRequest:
    path_params: DeleteSchedulePathParams = field()
    security: DeleteScheduleSecurity = field()
    

@dataclass
class DeleteScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    
