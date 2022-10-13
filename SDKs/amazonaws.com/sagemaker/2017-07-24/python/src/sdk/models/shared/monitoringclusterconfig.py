from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import processinginstancetype_enum


@dataclass_json
@dataclass
class MonitoringClusterConfig:
    instance_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_type: processinginstancetype_enum.ProcessingInstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    volume_size_in_gb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeSizeInGB' }})
    
