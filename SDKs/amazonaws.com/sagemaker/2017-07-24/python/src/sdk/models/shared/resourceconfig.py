from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceConfig:
    r"""ResourceConfig
    Describes the resources, including ML compute instances and ML storage volumes, to use for model training. 
    """
    
    instance_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_type: TrainingInstanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    volume_size_in_gb: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeSizeInGB') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    
