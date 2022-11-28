from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsUpdateWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrgsUpdateWebhookRequestBodyConfig:
    r"""OrgsUpdateWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-hook-config-params).
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class OrgsUpdateWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    config: Optional[OrgsUpdateWebhookRequestBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class OrgsUpdateWebhookRequest:
    path_params: OrgsUpdateWebhookPathParams = field()
    request: Optional[OrgsUpdateWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsUpdateWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_hook: Optional[shared.OrgHook] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
