from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import notificationconfig


@dataclass_json
@dataclass
class NotificationConfigList:
    items: List[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
