from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetCalendarDatesExportRendererEnum(str, Enum):
    ICS = "ics"
    CSV = "csv"


@dataclass
class GetCalendarDatesExportQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    calendar_category_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'calendar_category_id', 'style': 'form', 'explode': True }})
    description: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    event_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'event_id', 'style': 'form', 'explode': True }})
    max_end_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_end_date', 'style': 'form', 'explode': True }})
    max_start_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_start_date', 'style': 'form', 'explode': True }})
    min_end_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_end_date', 'style': 'form', 'explode': True }})
    min_start_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_start_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    renderer: Optional[GetCalendarDatesExportRendererEnum] = field(default=None, metadata={'query_param': { 'field_name': 'renderer', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    summary: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'summary', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCalendarDatesExportRequest:
    query_params: GetCalendarDatesExportQueryParams = field()
    

@dataclass
class GetCalendarDatesExportResponse:
    content_type: str = field()
    status_code: int = field()
    calendar_date_page: Optional[shared.CalendarDatePage] = field(default=None)
    
