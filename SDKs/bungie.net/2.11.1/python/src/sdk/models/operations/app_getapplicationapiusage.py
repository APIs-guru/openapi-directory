from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class AppGetApplicationAPIUsagePathParams:
    application_id: int = field(metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppGetApplicationAPIUsageQueryParams:
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class AppGetApplicationAPIUsageSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AppGetApplicationAPIUsageRequest:
    path_params: AppGetApplicationAPIUsagePathParams = field()
    query_params: AppGetApplicationAPIUsageQueryParams = field()
    security: AppGetApplicationAPIUsageSecurity = field()
    

@dataclass
class AppGetApplicationAPIUsageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
