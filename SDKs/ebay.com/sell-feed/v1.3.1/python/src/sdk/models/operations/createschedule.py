from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateScheduleRequest:
    request: shared.CreateUserScheduleRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScheduleSecurity = field()
    

@dataclass
class CreateScheduleResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    create_schedule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
