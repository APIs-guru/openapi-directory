from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteClusterRequest:
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    final_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FinalSnapshotName' }})
    
