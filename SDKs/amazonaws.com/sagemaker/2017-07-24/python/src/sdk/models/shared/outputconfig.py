from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetdevice_enum
from . import targetplatform


@dataclass_json
@dataclass
class OutputConfig:
    compiler_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilerOptions' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    s3_output_location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputLocation' }})
    target_device: Optional[targetdevice_enum.TargetDeviceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetDevice' }})
    target_platform: Optional[targetplatform.TargetPlatform] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetPlatform' }})
    
