from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputConfig:
    r"""OutputConfig
    Contains information about the output location for the compiled model and the target device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code> are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the platform of your edge device and <code>CompilerOptions</code> if there are specific settings that are required or recommended to use for particular TargetPlatform.
    """
    
    s3_output_location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3OutputLocation') }})
    compiler_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompilerOptions') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    target_device: Optional[TargetDeviceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetDevice') }})
    target_platform: Optional[TargetPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetPlatform') }})
    
