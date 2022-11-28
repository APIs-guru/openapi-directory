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
class Webhook:
    delivery_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_url') }})
    events: List[WebhookEventTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    execute_base_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execute_base_url') }})
    status: StatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    unified_api: UnifiedAPIIDEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_api') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
