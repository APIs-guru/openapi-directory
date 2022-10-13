from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import notificationchannel


@dataclass_json
@dataclass
class NotificationChannelList:
    items: List[notificationchannel.NotificationChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
