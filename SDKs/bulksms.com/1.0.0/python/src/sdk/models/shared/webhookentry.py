from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WebhookEntryInvokeOptionEnum(str, Enum):
    ONE = "ONE"
    MANY = "MANY"

class WebhookEntryTriggerScopeEnum(str, Enum):
    SENT = "SENT"
    RECEIVED = "RECEIVED"


@dataclass_json
@dataclass
class WebhookEntry:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    contact_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmailAddress' }})
    invoke_option: Optional[WebhookEntryInvokeOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invokeOption' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_web_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onWebApp' }})
    trigger_scope: WebhookEntryTriggerScopeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerScope' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
