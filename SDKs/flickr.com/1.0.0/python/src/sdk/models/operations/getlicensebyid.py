from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLicenseByIDQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLicenseByIDRequest:
    query_params: GetLicenseByIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLicenseByID200ApplicationJSONLicensesLicense:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetLicenseByID200ApplicationJSONLicenses:
    license: Optional[List[GetLicenseByID200ApplicationJSONLicensesLicense]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    

@dataclass_json
@dataclass
class GetLicenseByID200ApplicationJSON:
    licenses: Optional[GetLicenseByID200ApplicationJSONLicenses] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenses' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass
class GetLicenseByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_license_by_id_200_application_json_object: Optional[GetLicenseByID200ApplicationJSON] = field(default=None)
    
