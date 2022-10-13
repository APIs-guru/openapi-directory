from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import snapshot


@dataclass_json
@dataclass
class CopySnapshotResponse:
    snapshot: Optional[snapshot.Snapshot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Snapshot' }})
    
