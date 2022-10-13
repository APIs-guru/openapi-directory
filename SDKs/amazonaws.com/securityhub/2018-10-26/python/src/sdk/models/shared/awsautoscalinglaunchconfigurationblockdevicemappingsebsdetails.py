from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails:
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteOnTermination' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    volume_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSize' }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
