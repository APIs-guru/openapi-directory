from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetReportingDatesQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    max_create_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_create_date', 'style': 'form', 'explode': True }})
    max_due_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_due_date', 'style': 'form', 'explode': True }})
    max_update_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'max_update_date', 'style': 'form', 'explode': True }})
    min_create_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_create_date', 'style': 'form', 'explode': True }})
    min_due_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_due_date', 'style': 'form', 'explode': True }})
    min_update_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'min_update_date', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    report_type: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'report_type', 'style': 'form', 'explode': True }})
    report_year: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'report_year', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetReportingDatesDefaultApplicationJSON:
    pagination: Optional[shared.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[shared.ReportDate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class GetReportingDatesRequest:
    query_params: GetReportingDatesQueryParams = field()
    

@dataclass
class GetReportingDatesResponse:
    content_type: str = field()
    status_code: int = field()
    get_reporting_dates_default_application_json_object: Optional[GetReportingDatesDefaultApplicationJSON] = field(default=None)
    
