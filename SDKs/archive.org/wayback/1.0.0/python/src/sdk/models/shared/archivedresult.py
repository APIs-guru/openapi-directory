from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import snapshot


@dataclass_json
@dataclass
class ArchivedResult:
    snapshot: snapshot.Snapshot = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
