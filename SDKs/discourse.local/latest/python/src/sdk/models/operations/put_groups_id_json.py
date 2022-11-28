from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutGroupsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSONRequestBodyGroup:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSONRequestBody:
    group: PutGroupsIDJSONRequestBodyGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class PutGroupsIDJSONRequest:
    path_params: PutGroupsIDJSONPathParams = field()
    request: Optional[PutGroupsIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutGroupsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_groups_id_json_200_application_json_object: Optional[PutGroupsIDJSON200ApplicationJSON] = field(default=None)
    
