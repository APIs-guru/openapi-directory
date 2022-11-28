from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopySnapshotRequest:
    source_snapshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceSnapshotName') }})
    target_snapshot_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetSnapshotName') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    target_bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetBucket') }})
    
