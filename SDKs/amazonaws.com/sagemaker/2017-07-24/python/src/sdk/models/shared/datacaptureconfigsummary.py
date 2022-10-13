from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import capturestatus_enum


@dataclass_json
@dataclass
class DataCaptureConfigSummary:
    capture_status: capturestatus_enum.CaptureStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureStatus' }})
    current_sampling_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentSamplingPercentage' }})
    destination_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationS3Uri' }})
    enable_capture: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableCapture' }})
    kms_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    
