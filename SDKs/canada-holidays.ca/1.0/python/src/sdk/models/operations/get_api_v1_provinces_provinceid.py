from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
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
    province_id: GetAPIV1ProvincesProvinceIDProvinceIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'provinceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1ProvincesProvinceIDQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1ProvincesProvinceIDRequest:
    path_params: GetAPIV1ProvincesProvinceIDPathParams = field(default=None)
    query_params: GetAPIV1ProvincesProvinceIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV1ProvincesProvinceID200ApplicationJSON:
    province: Optional[shared.Province] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'province' }})
    

@dataclass_json
@dataclass
class GetAPIV1ProvincesProvinceID404ApplicationJSON:
    error: Optional[shared.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class GetAPIV1ProvincesProvinceIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_api_v1_provinces_province_id_200_application_json_object: Optional[GetAPIV1ProvincesProvinceID200ApplicationJSON] = field(default=None)
    get_api_v1_provinces_province_id_404_application_json_object: Optional[GetAPIV1ProvincesProvinceID404ApplicationJSON] = field(default=None)
    
