from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateWebhookRequest:
    delivery_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: List[shared.WebhookEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    status: shared.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unified_api: shared.UnifiedAPIIDEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_api' }})
    
