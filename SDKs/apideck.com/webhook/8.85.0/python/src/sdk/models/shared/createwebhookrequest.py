from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWebhookRequest:
    delivery_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    events: List[WebhookEventTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    unified_api: UnifiedAPIIDEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
