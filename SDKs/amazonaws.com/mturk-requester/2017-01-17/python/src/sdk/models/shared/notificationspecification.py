from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import eventtype_enum
from . import notificationtransport_enum


@dataclass_json
@dataclass
class NotificationSpecification:
    destination: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    event_types: List[eventtype_enum.EventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypes' }})
    transport: notificationtransport_enum.NotificationTransportEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transport' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
