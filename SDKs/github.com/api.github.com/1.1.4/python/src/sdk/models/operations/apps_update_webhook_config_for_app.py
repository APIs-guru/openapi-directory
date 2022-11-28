from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AppsUpdateWebhookConfigForAppRequestBody:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insecure_ssl') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class AppsUpdateWebhookConfigForAppRequest:
    request: Optional[AppsUpdateWebhookConfigForAppRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AppsUpdateWebhookConfigForAppResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_config: Optional[shared.WebhookConfig] = field(default=None)
    
