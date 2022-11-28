from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateWebhookRequest:
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[List[WebhookEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
