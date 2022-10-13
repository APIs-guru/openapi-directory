from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import moderationlabel


@dataclass_json
@dataclass
class ContentModerationDetection:
    moderation_label: Optional[moderationlabel.ModerationLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModerationLabel' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp' }})
    
