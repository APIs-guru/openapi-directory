from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webhookeventtype_enum
from . import status_enum


@dataclass_json
@dataclass
class UpdateWebhookRequest:
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[webhookeventtype_enum.WebhookEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
