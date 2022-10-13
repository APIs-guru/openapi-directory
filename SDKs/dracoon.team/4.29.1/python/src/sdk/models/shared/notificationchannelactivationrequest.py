from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationChannelActivationRequest:
    channel_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    is_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    
