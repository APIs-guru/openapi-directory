from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateScheduleSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateScheduleRequest:
    request: shared.CreateUserScheduleRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateScheduleSecurity = field(default=None)
    

@dataclass
class CreateScheduleResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_schedule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
