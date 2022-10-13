from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDeployablePatchSnapshotForInstanceResult:
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Product' }})
    snapshot_download_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotDownloadUrl' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    
