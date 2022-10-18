from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webhookeventtype_enum
from . import status_enum
from . import unifiedapiid_enum


@dataclass_json
@dataclass
class CreateWebhookRequest:
    delivery_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: List[webhookeventtype_enum.WebhookEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    status: status_enum.StatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unified_api: unifiedapiid_enum.UnifiedAPIIDEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_api' }})
    
