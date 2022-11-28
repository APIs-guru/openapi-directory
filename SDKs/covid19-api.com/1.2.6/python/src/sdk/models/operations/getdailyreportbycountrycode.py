from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDailyReportByCountryCodeDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportByCountryCodeFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetDailyReportByCountryCodeQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    date_: str = field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportByCountryCodeDateFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportByCountryCodeFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetDailyReportByCountryCode200ApplicationJSONProvince:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclass_json
@dataclass
class GetDailyReportByCountryCode200ApplicationJSON:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    province: Optional[List[GetDailyReportByCountryCode200ApplicationJSONProvince]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('province') }})
    

@dataclass
class GetDailyReportByCountryCodeRequest:
    query_params: GetDailyReportByCountryCodeQueryParams = field()
    

@dataclass
class GetDailyReportByCountryCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_daily_report_by_country_code_200_application_json_objects: Optional[List[GetDailyReportByCountryCode200ApplicationJSON]] = field(default=None)
    
