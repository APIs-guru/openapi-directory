from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutTIDStatusJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDStatusJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    
class PutTIDStatusJSONRequestBodyEnabledEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class PutTIDStatusJSONRequestBodyStatusEnum(str, Enum):
    CLOSED = "closed"
    PINNED = "pinned"
    PINNED_GLOBALLY = "pinned_globally"
    ARCHIVED = "archived"
    VISIBLE = "visible"


@dataclass_json
@dataclass
class PutTIDStatusJSONRequestBody:
    enabled: PutTIDStatusJSONRequestBodyEnabledEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    status: PutTIDStatusJSONRequestBodyStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'until' }})
    

@dataclass
class PutTIDStatusJSONRequest:
    path_params: PutTIDStatusJSONPathParams = field(default=None)
    headers: PutTIDStatusJSONHeaders = field(default=None)
    request: Optional[PutTIDStatusJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutTIDStatusJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    topic_status_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic_status_update' }})
    

@dataclass
class PutTIDStatusJSONResponse:
    content_type: str = field(default=None)
    put_t_id_status_json_200_application_json_object: Optional[PutTIDStatusJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
