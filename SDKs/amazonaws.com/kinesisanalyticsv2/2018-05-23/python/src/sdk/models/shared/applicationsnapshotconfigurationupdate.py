from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationSnapshotConfigurationUpdate:
    snapshots_enabled_update: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotsEnabledUpdate' }})
    
