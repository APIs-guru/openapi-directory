from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsCreateWebhookPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsCreateWebhookRequestBodyConfig:
    r"""OrgsCreateWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.18/rest/reference/orgs#create-hook-config-params).
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class OrgsCreateWebhookRequestBody:
    config: OrgsCreateWebhookRequestBodyConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass
class OrgsCreateWebhookRequest:
    path_params: OrgsCreateWebhookPathParams = field()
    request: Optional[OrgsCreateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsCreateWebhookResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_hook: Optional[shared.OrgHook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
