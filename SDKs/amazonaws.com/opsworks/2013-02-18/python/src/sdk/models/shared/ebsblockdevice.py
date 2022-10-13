from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import volumetype_enum


@dataclass_json
@dataclass
class EbsBlockDevice:
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteOnTermination' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSize' }})
    volume_type: Optional[volumetype_enum.VolumeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
