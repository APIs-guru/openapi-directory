from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import perobjectstatus


@dataclass_json
@dataclass
class SyncState:
    attachment: Optional[attachment.Attachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachment' }})
    config: Optional[dict[str, perobjectstatus.PerObjectStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Config' }})
    
