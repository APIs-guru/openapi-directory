from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EdgeOutputConfig:
    r"""EdgeOutputConfig
    The output configuration.
    """
    
    s3_output_location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputLocation') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    preset_deployment_config: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetDeploymentConfig') }})
    preset_deployment_type: Optional[EdgePresetDeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PresetDeploymentType') }})
    
