from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OptIn1:
    opencast: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opencast' }})
    preview_channel: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_channel' }})
    remote_ducking: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_ducking' }})
    stats: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
