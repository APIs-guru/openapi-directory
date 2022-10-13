from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notification


@dataclass_json
@dataclass
class Settings:
    notifications: Optional[List[notification.Notification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    
