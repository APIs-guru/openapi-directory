from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSchedulesQueryParams:
    channels: List[str] = field(metadata={'query_param': { 'field_name': 'channels', 'style': 'form', 'explode': False }})
    date_: date = field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    duration: int = field(metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    hour: int = field(metadata={'query_param': { 'field_name': 'hour', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    intersect: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'intersect', 'style': 'form', 'explode': True }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    segments: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'segments', 'style': 'form', 'explode': False }})
    sub: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sub', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesRequest:
    query_params: GetSchedulesQueryParams = field()
    

@dataclass
class GetSchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    item_schedule_lists: Optional[List[shared.ItemScheduleList]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
