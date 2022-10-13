from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationtargetitem


@dataclass_json
@dataclass
class IncidentTemplate:
    dedupe_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dedupeString' }})
    impact: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impact' }})
    notification_targets: Optional[List[notificationtargetitem.NotificationTargetItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTargets' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
