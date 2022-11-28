from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksHolidays:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksProvinces:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSONLinks:
    holidays: Optional[GetAPIVi200ApplicationJSONLinksHolidays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidays') }})
    provinces: Optional[GetAPIVi200ApplicationJSONLinksProvinces] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provinces') }})
    self: Optional[GetAPIVi200ApplicationJSONLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class GetAPIVi200ApplicationJSON:
    links: Optional[GetAPIVi200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetAPIViResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_vi_200_application_json_object: Optional[GetAPIVi200ApplicationJSON] = field(default=None)
    
