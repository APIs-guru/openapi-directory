from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSchedulesQueryParams:
    channels: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'channels', 'style': 'form', 'explode': False }})
    date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    duration: int = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    hour: int = field(default=None, metadata={'query_param': { 'field_name': 'hour', 'style': 'form', 'explode': True }})
    intersect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'intersect', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesRequest:
    query_params: GetSchedulesQueryParams = field(default=None)
    

@dataclass
class GetSchedulesResponse:
    content_type: str = field(default=None)
    item_schedule_lists: Optional[List[shared.ItemScheduleList]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
