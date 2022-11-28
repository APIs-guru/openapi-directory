from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformResources:
    r"""TransformResources
    Describes the resources, including ML instance types and ML instance count, to use for transform job.
    """
    
    instance_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceCount') }})
    instance_type: TransformInstanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    
