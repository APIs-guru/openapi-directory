from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerContext:
    activity_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityIdentifier' }})
    content_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentIdentifier' }})
    offset_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offsetInMillis' }})
    playback_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playbackSpeed' }})
    queue_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueIdentifier' }})
    
