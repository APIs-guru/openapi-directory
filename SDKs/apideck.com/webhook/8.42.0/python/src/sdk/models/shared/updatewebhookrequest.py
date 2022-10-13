from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class UpdateWebhookRequest:
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[shared.WebhookEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    status: Optional[shared.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
