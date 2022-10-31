from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutTIDChangeTimestampJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDChangeTimestampJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTIDChangeTimestampJSONRequestBody:
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass
class PutTIDChangeTimestampJSONRequest:
    path_params: PutTIDChangeTimestampJSONPathParams = field(default=None)
    headers: PutTIDChangeTimestampJSONHeaders = field(default=None)
    request: Optional[PutTIDChangeTimestampJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutTIDChangeTimestampJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class PutTIDChangeTimestampJSONResponse:
    content_type: str = field(default=None)
    put_t_id_change_timestamp_json_200_application_json_object: Optional[PutTIDChangeTimestampJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
