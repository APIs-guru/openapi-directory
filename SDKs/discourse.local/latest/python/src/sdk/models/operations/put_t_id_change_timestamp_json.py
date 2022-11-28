from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutTIDChangeTimestampJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDChangeTimestampJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTIDChangeTimestampJSONRequestBody:
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclass
class PutTIDChangeTimestampJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class PutTIDChangeTimestampJSONRequest:
    headers: PutTIDChangeTimestampJSONHeaders = field()
    path_params: PutTIDChangeTimestampJSONPathParams = field()
    request: Optional[PutTIDChangeTimestampJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTIDChangeTimestampJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_t_id_change_timestamp_json_200_application_json_object: Optional[PutTIDChangeTimestampJSON200ApplicationJSON] = field(default=None)
    
