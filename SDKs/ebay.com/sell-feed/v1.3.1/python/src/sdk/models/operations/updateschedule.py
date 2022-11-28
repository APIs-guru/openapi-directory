from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateSchedulePathParams:
    schedule_id: str = field(metadata={'path_param': { 'field_name': 'schedule_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateScheduleRequest:
    path_params: UpdateSchedulePathParams = field()
    request: shared.UpdateUserScheduleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateScheduleSecurity = field()
    

@dataclass
class UpdateScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    
