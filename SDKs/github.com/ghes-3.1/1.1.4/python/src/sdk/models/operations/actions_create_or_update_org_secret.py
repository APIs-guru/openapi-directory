from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsCreateOrUpdateOrgSecretPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    
class ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    SELECTED = "selected"


@dataclass_json
@dataclass
class ActionsCreateOrUpdateOrgSecretRequestBody:
    visibility: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    selected_repository_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclass
class ActionsCreateOrUpdateOrgSecretRequest:
    path_params: ActionsCreateOrUpdateOrgSecretPathParams = field()
    request: Optional[ActionsCreateOrUpdateOrgSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateOrgSecretResponse:
    content_type: str = field()
    status_code: int = field()
    empty_object: Optional[dict[str, Any]] = field(default=None)
    
