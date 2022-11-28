from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsCreateOrUpdateRepoSecretPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateOrUpdateRepoSecretRequestBody:
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    

@dataclass
class ActionsCreateOrUpdateRepoSecretRequest:
    path_params: ActionsCreateOrUpdateRepoSecretPathParams = field()
    request: Optional[ActionsCreateOrUpdateRepoSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateRepoSecretResponse:
    content_type: str = field()
    status_code: int = field()
    actions_create_or_update_repo_secret_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
