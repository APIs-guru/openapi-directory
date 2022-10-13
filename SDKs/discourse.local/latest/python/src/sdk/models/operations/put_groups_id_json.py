from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutGroupsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSONRequestBodyGroup:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSONRequestBody:
    group: PutGroupsIDJSONRequestBodyGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    

@dataclass
class PutGroupsIDJSONRequest:
    path_params: PutGroupsIDJSONPathParams = field(default=None)
    request: Optional[PutGroupsIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutGroupsIDJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class PutGroupsIDJSONResponse:
    content_type: str = field(default=None)
    put_groups_id_json_200_application_json_object: Optional[PutGroupsIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
