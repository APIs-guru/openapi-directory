from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelingJobResourceConfig:
    r"""LabelingJobResourceConfig
    Configure encryption on the storage volume attached to the ML compute instance used to run automated data labeling model training and inference. 
    """
    
    volume_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeKmsKeyId') }})
    
