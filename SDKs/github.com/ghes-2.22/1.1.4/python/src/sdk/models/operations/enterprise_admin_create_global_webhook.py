from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateGlobalWebhookHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig:
    r"""EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook.
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminCreateGlobalWebhookRequestBody:
    config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass
class EnterpriseAdminCreateGlobalWebhookRequest:
    headers: EnterpriseAdminCreateGlobalWebhookHeaders = field()
    request: Optional[EnterpriseAdminCreateGlobalWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateGlobalWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    global_hook: Optional[shared.GlobalHook] = field(default=None)
    
