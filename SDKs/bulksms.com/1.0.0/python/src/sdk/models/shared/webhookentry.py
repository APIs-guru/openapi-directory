from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebhookEntryInvokeOptionEnum(str, Enum):
    ONE = "ONE"
    MANY = "MANY"

class WebhookEntryTriggerScopeEnum(str, Enum):
    SENT = "SENT"
    RECEIVED = "RECEIVED"


@dataclass_json
@dataclass
class WebhookEntry:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    trigger_scope: WebhookEntryTriggerScopeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerScope') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    contact_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmailAddress') }})
    invoke_option: Optional[WebhookEntryInvokeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invokeOption') }})
    on_web_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onWebApp') }})
    
