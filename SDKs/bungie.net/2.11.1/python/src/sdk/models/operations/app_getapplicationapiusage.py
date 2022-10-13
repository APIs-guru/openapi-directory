from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class AppGetApplicationAPIUsagePathParams:
    application_id: int = field(default=None, metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppGetApplicationAPIUsageQueryParams:
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class AppGetApplicationAPIUsageSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppGetApplicationAPIUsageRequest:
    path_params: AppGetApplicationAPIUsagePathParams = field(default=None)
    query_params: AppGetApplicationAPIUsageQueryParams = field(default=None)
    security: AppGetApplicationAPIUsageSecurity = field(default=None)
    

@dataclass
class AppGetApplicationAPIUsageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
