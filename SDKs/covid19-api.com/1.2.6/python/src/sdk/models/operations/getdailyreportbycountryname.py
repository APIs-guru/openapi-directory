from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetDailyReportByCountryNameDateFormatEnum(str, Enum):
    YYYY_MM_DD = "YYYY-MM-DD"
    YYYY_DD_MM = "YYYY-DD-MM"
    DD_MM_YYYY = "DD-MM-YYYY"
    MM_DD_YYYY = "MM-DD-YYYY"

class GetDailyReportByCountryNameFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetDailyReportByCountryNameQueryParams:
    date: str = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    date_format: Optional[GetDailyReportByCountryNameDateFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'date-format', 'style': 'form', 'explode': True }})
    format: Optional[GetDailyReportByCountryNameFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDailyReportByCountryNameRequest:
    query_params: GetDailyReportByCountryNameQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDailyReportByCountryName200ApplicationJSONProvince:
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deaths' }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovered' }})
    

@dataclass_json
@dataclass
class GetDailyReportByCountryName200ApplicationJSON:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    province: Optional[List[GetDailyReportByCountryName200ApplicationJSONProvince]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'province' }})
    

@dataclass
class GetDailyReportByCountryNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_daily_report_by_country_name_200_application_json_objects: Optional[List[GetDailyReportByCountryName200ApplicationJSON]] = field(default=None)
    
