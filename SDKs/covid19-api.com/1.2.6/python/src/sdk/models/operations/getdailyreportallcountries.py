from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetDailyReportAllCountriesDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportAllCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetDailyReportAllCountriesQueryParams:
    date_: str = field(metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportAllCountriesDateFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportAllCountriesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetDailyReportAllCountries200ApplicationJSONProvince:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclass_json
@dataclass
class GetDailyReportAllCountries200ApplicationJSON:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    province: Optional[List[GetDailyReportAllCountries200ApplicationJSONProvince]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('province') }})
    

@dataclass
class GetDailyReportAllCountriesRequest:
    query_params: GetDailyReportAllCountriesQueryParams = field()
    

@dataclass
class GetDailyReportAllCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_daily_report_all_countries_200_application_json_objects: Optional[List[GetDailyReportAllCountries200ApplicationJSON]] = field(default=None)
    
