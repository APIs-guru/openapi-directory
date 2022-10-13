from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduleTemplatesQueryParams:
    feed_type: str = field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduleTemplatesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetScheduleTemplatesRequest:
    query_params: GetScheduleTemplatesQueryParams = field(default=None)
    security: GetScheduleTemplatesSecurity = field(default=None)
    

@dataclass
class GetScheduleTemplatesResponse:
    content_type: str = field(default=None)
    schedule_template_collection: Optional[shared.ScheduleTemplateCollection] = field(default=None)
    status_code: int = field(default=None)
    
