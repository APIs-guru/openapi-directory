from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsCreateOrUpdateEnvironmentSecretPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    secret_name: str = field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequestBody:
    encrypted_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    

@dataclass
class ActionsCreateOrUpdateEnvironmentSecretRequest:
    path_params: ActionsCreateOrUpdateEnvironmentSecretPathParams = field()
    request: Optional[ActionsCreateOrUpdateEnvironmentSecretRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateOrUpdateEnvironmentSecretResponse:
    content_type: str = field()
    status_code: int = field()
    
