from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import capturecontenttypeheader
from . import captureoption


@dataclass_json
@dataclass
class DataCaptureConfig:
    capture_content_type_header: Optional[capturecontenttypeheader.CaptureContentTypeHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureContentTypeHeader' }})
    capture_options: List[captureoption.CaptureOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureOptions' }})
    destination_s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationS3Uri' }})
    enable_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableCapture' }})
    initial_sampling_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitialSamplingPercentage' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    
