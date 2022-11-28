from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataCaptureConfigSummary:
    r"""DataCaptureConfigSummary
    <p/>
    """
    
    capture_status: CaptureStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CaptureStatus') }})
    current_sampling_percentage: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentSamplingPercentage') }})
    destination_s3_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationS3Uri') }})
    enable_capture: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableCapture') }})
    kms_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
