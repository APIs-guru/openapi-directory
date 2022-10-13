from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateSnapshotRequest:
    cluster_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterName' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
