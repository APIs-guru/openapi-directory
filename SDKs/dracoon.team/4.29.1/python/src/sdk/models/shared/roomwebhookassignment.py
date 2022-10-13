from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoomWebhookAssignment:
    is_assigned: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAssigned' }})
    webhook_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookId' }})
    
