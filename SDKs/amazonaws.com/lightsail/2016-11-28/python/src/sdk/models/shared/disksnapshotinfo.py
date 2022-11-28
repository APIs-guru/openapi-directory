from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiskSnapshotInfo:
    r"""DiskSnapshotInfo
    Describes a disk snapshot.
    """
    
    size_in_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    
