from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposCreateWebhookPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateWebhookRequestBodyConfig:
    r"""ReposCreateWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digest') }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class ReposCreateWebhookRequestBody:
    config: ReposCreateWebhookRequestBodyConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class ReposCreateWebhookRequest:
    path_params: ReposCreateWebhookPathParams = field()
    request: Optional[ReposCreateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateWebhookResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    hook: Optional[shared.Hook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
