from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDailyReportTotalsDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportTotalsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetDailyReportTotalsQueryParams:
    date_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportTotalsDateFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportTotalsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetDailyReportTotals200ApplicationJSON:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    critical: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclass
class GetDailyReportTotalsRequest:
    query_params: GetDailyReportTotalsQueryParams = field()
    

@dataclass
class GetDailyReportTotalsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_daily_report_totals_200_application_json_objects: Optional[List[GetDailyReportTotals200ApplicationJSON]] = field(default=None)
    
