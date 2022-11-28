from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetLatestAllCountriesFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetLatestAllCountriesQueryParams:
    format: Optional[GetLatestAllCountriesFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLatestAllCountries200ApplicationJSON:
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmed') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    critical: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('critical') }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deaths') }})
    last_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastChange'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovered') }})
    

@dataclass
class GetLatestAllCountriesRequest:
    query_params: GetLatestAllCountriesQueryParams = field()
    

@dataclass
class GetLatestAllCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_latest_all_countries_200_application_json_objects: Optional[List[GetLatestAllCountries200ApplicationJSON]] = field(default=None)
    
