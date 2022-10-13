from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteResourceDataSyncRequest:
    sync_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncName' }})
    sync_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncType' }})
    
