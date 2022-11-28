from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataCaptureConfig:
    r"""DataCaptureConfig
    <p/>
    """
    
    capture_options: List[CaptureOption] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureOptions') }})
    destination_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationS3Uri') }})
    initial_sampling_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InitialSamplingPercentage') }})
    capture_content_type_header: Optional[CaptureContentTypeHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureContentTypeHeader') }})
    enable_capture: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableCapture') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
