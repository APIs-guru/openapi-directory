from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transforminstancetype_enum


@dataclass_json
@dataclass
class TransformResources:
    instance_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceCount' }})
    instance_type: transforminstancetype_enum.TransformInstanceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeKmsKeyId' }})
    
