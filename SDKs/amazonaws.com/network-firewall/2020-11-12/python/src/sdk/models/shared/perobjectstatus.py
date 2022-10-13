from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import perobjectsyncstatus_enum


@dataclass_json
@dataclass
class PerObjectStatus:
    sync_status: Optional[perobjectsyncstatus_enum.PerObjectSyncStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncStatus' }})
    update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateToken' }})
    
