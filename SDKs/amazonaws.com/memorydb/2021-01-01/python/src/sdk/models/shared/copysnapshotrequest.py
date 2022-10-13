from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CopySnapshotRequest:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    source_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceSnapshotName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    target_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetBucket' }})
    target_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetSnapshotName' }})
    
