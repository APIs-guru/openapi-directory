from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import propertynotificationstate_enum


@dataclass_json
@dataclass
class PropertyNotification:
    state: propertynotificationstate_enum.PropertyNotificationStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
