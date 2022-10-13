from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import notificationscope


@dataclass_json
@dataclass
class NotificationScopeList:
    items: List[notificationscope.NotificationScope] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
