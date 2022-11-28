from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetAPIV1ProvincesProvinceIDProvinceIDEnum(str, Enum):
    AB = "AB"
    BC = "BC"
    MB = "MB"
    NB = "NB"
    NL = "NL"
    NS = "NS"
    NT = "NT"
    NU = "NU"
    ON = "ON"
    PE = "PE"
    QC = "QC"
    SK = "SK"
    YT = "YT"


@dataclass
class GetAPIV1ProvincesProvinceIDPathParams:
    province_id: GetAPIV1ProvincesProvinceIDProvinceIDEnum = field(metadata={'path_param': { 'field_name': 'provinceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1ProvincesProvinceIDQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetAPIV1ProvincesProvinceID200ApplicationJSON:
    province: Optional[shared.Province] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('province') }})
    

@dataclass_json
@dataclass
class GetAPIV1ProvincesProvinceID404ApplicationJSON:
    error: Optional[shared.Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class GetAPIV1ProvincesProvinceIDRequest:
    path_params: GetAPIV1ProvincesProvinceIDPathParams = field()
    query_params: GetAPIV1ProvincesProvinceIDQueryParams = field()
    

@dataclass
class GetAPIV1ProvincesProvinceIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v1_provinces_province_id_200_application_json_object: Optional[GetAPIV1ProvincesProvinceID200ApplicationJSON] = field(default=None)
    get_api_v1_provinces_province_id_404_application_json_object: Optional[GetAPIV1ProvincesProvinceID404ApplicationJSON] = field(default=None)
    
