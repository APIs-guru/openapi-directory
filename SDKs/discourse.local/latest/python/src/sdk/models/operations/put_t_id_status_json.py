from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutTIDStatusJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTIDStatusJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    
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
    enabled: PutTIDStatusJSONRequestBodyEnabledEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    status: PutTIDStatusJSONRequestBodyStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    until: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('until') }})
    

@dataclass_json
@dataclass
class PutTIDStatusJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    topic_status_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_status_update') }})
    

@dataclass
class PutTIDStatusJSONRequest:
    headers: PutTIDStatusJSONHeaders = field()
    path_params: PutTIDStatusJSONPathParams = field()
    request: Optional[PutTIDStatusJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTIDStatusJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_t_id_status_json_200_application_json_object: Optional[PutTIDStatusJSON200ApplicationJSON] = field(default=None)
    
