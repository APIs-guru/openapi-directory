from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksHolidays:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksProvinces:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinks:
    holidays: Optional[GetAPIVi200ApplicationJSONLinksHolidays] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holidays' }})
    provinces: Optional[GetAPIVi200ApplicationJSONLinksProvinces] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provinces' }})
    self: Optional[GetAPIVi200ApplicationJSONLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSON:
    links: Optional[GetAPIVi200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAPIViResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_api_vi_200_application_json_object: Optional[GetAPIVi200ApplicationJSON] = field(default=None)
    
