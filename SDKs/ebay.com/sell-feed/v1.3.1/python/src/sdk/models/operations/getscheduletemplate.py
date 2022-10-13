from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduleTemplatePathParams:
    schedule_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleTemplateSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScheduleTemplateRequest:
    path_params: GetScheduleTemplatePathParams = field(default=None)
    security: GetScheduleTemplateSecurity = field(default=None)
    

@dataclass
class GetScheduleTemplateResponse:
    content_type: str = field(default=None)
    schedule_template_response: Optional[shared.ScheduleTemplateResponse] = field(default=None)
    status_code: int = field(default=None)
    
