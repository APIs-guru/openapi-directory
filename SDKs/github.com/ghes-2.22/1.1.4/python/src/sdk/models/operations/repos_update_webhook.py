from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateWebhookRequestBodyConfig:
    r"""ReposUpdateWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#create-hook-config-params).
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('room') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class ReposUpdateWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    add_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_events') }})
    config: Optional[ReposUpdateWebhookRequestBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    remove_events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_events') }})
    

@dataclass
class ReposUpdateWebhookRequest:
    path_params: ReposUpdateWebhookPathParams = field()
    request: Optional[ReposUpdateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
