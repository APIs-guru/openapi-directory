from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import resourcedatasyncsource


@dataclass_json
@dataclass
class UpdateResourceDataSyncRequest:
    sync_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncName' }})
    sync_source: resourcedatasyncsource.ResourceDataSyncSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncSource' }})
    sync_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncType' }})
    
