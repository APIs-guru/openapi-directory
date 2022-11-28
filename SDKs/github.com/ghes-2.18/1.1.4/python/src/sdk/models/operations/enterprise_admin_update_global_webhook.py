from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateGlobalWebhookPathParams:
    hook_id: int = field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig:
    r"""EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig
    Key/value pairs to provide settings for this webhook.
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    config: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookRequest:
    headers: EnterpriseAdminUpdateGlobalWebhookHeaders = field()
    path_params: EnterpriseAdminUpdateGlobalWebhookPathParams = field()
    request: Optional[EnterpriseAdminUpdateGlobalWebhookRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateGlobalWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    global_hook_2: Optional[shared.GlobalHook2] = field(default=None)
    
