from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduleTemplatePathParams:
    schedule_template_id: str = field(metadata={'path_param': { 'field_name': 'schedule_template_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduleTemplateSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScheduleTemplateRequest:
    path_params: GetScheduleTemplatePathParams = field()
    security: GetScheduleTemplateSecurity = field()
    

@dataclass
class GetScheduleTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    schedule_template_response: Optional[shared.ScheduleTemplateResponse] = field(default=None)
    
