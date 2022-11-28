from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetAllAPIVersionsPathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetAllAPIVersions200ApplicationJSONVersions:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclass
class GetAllAPIVersions200ApplicationJSON:
    versions: Optional[List[GetAllAPIVersions200ApplicationJSONVersions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    

@dataclass
class GetAllAPIVersionsRequest:
    path_params: GetAllAPIVersionsPathParams = field()
    

@dataclass
class GetAllAPIVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_api_versions_200_application_json_object: Optional[GetAllAPIVersions200ApplicationJSON] = field(default=None)
    
