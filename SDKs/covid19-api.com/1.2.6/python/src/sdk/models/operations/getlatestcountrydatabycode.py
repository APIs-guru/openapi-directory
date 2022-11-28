from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetLatestCountryDataByCodeFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetLatestCountryDataByCodeQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    format: Optional[GetLatestCountryDataByCodeFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetLatestCountryDataByCode200ApplicationJSON:
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
class GetLatestCountryDataByCodeRequest:
    query_params: GetLatestCountryDataByCodeQueryParams = field()
    

@dataclass
class GetLatestCountryDataByCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_latest_country_data_by_code_200_application_json_objects: Optional[List[GetLatestCountryDataByCode200ApplicationJSON]] = field(default=None)
    
