from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportProjectResult:
    download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUrl' }})
    share_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shareUrl' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotId' }})
    
